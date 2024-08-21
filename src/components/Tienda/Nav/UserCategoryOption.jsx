import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import helpHttp from "../../../hooks/helpHttp";
import { SERVER_URL } from "../../../Const/server";
import { TOKEN } from "../../../Const/token";

const UserCategoryOption = ({ ident, setShow, initialShow }) => {
  const [data, setData] = useState([]);
  const headers = {
    Authorization: "Bearer " + TOKEN,
  };
  useEffect(() => {
    const getSubCategory = async () => {
      helpHttp()
        .get(SERVER_URL + "subCategory/category/" + ident, { headers })
        .then((res) => {
          if (!res.err) {
            console.log(res);
            setData(res);
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    };

    getSubCategory();
  }, [ident]);

  return (
    <>
      {data.length > 0 && (
        <div
          className="box-border  w-48    flex justify-center items-center 
    absolute z-40 border  bg-white mt-11"
          onMouseLeave={() => setShow(initialShow)}
        >
          <div className="w-full flex flex-col ps-2 group">
            {console.log(data)}
            {data.map((value) => {
              return (
                <NavLink
                  className={"hover:transition hover:custom-red-text"}
                  key={value.idSubCategory}
                  to={
                    "product/" +
                    (value.name.includes("y")
                      ? value.name.toLowerCase().replace(" y ", "-y-")
                      : value.name.includes("sin")
                      ? value.name.toLowerCase().replace(" sin ", "-sin-")
                      : value.name.includes("de")
                      ? value.name.toLowerCase().replace(" de ", "-de-")
                      : value.name.includes(" ")
                      ? value.name.toLowerCase().replace(" ", "-")
                      : value.name.toLowerCase())
                  }
                >
                  {value.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UserCategoryOption;
