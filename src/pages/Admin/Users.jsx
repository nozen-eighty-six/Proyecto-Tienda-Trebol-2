import { useEffect, useState } from "react";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import { useMatch } from "react-router-dom";
import { currentSection } from "../../services/currentSection";
import useCabeceraAd from "../../hooks/helpCabeceraAd";
import { useSelector } from "react-redux";
import SearchCreationSection from "../../components/Admin/userSection/SearchCreationSection";
import UserSection from "../../components/Admin/userSection/UserSection";

const Users = () => {
  const state = useSelector((state) => state.cloud);
  const [data, setData] = useState([]);
  const match = useMatch("/admin/*");
  const urlName = match.params["*"];
  useEffect(() => {
    helpHttpT()
      .get(SERVER_URL + "user", {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        if (!res.error) {
          setData(res);
        } else {
          console.log("Error al obtener los datos");
        }
      });
    console.log(urlName);
    currentSection("/" + urlName);
  }, []);

  return (
    <main
      className={`lg:m-l-63 ${
        state.oculto && "min-main"
      } relative min-h-screen`}
    >
      <UserSection data={data} setData={setData} />
    </main>
  );
};

export default Users;
