import LoaderComponent from "../../Reusable/LoaderComponent";
import SearchCreationSection from "./SearchCreationSection";
import UserItem from "./UserItem";

const UserSection = ({ data, setData }) => {
  /*Me falta colocar los íconos de editar y eliminar en la tabla */
  return (
    <>
      <div>
        <h2 className="w-full p-2 text-3xl font-bold mb-4">Admin | Usuarios</h2>
      </div>
      <SearchCreationSection controller={"user"} setData={setData} />
      <table className="table table-striped table-bordered w-full  h-4/6 bg-white  text-start shadow-sm ">
        <thead>
          <tr>
            <th className=" ">Nombre</th>
            <th className="">Teléfono</th>

            <th className=" ">Correo</th>
            <th className=" ">Rol</th>
          </tr>
        </thead>
        {/*Falta seguir con los estilos para las diferentes secciones  */}
        <tbody>
          {data.length > 0 ? (
            data.map((user) => <UserItem element={user} key={user.idUser} />)
          ) : (
            <LoaderComponent loading={true} />
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserSection;
