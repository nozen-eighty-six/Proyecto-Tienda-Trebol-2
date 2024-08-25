import { useEffect, useState } from "react";
import UserTable from "../../components/Admin/userSection/UserTable";
import helpHttpT from "../../hooks/helpHttpT";
import { SERVER_URL } from "../../Const/server";
import { TOKEN } from "../../Const/token";
import { useMatch } from "react-router-dom";
import { currentSection } from "../../services/currentSection";

const Users = () => {
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
    <main className="lg:m-l-63 relative min-h-screen">
      <div>
        <h2 className="w-full p-2 text-3xl font-bold mb-4">Admin | Usuarios</h2>
      </div>
      <UserTable data={data} />
    </main>
  );
};

export default Users;
