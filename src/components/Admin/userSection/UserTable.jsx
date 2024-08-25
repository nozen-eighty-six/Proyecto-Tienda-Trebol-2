import UserItem from "./UserItem";

const UserTable = ({ data }) => {
  return (
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
        {data.length > 0 &&
          data.map((user) => <UserItem element={user} key={user.idUser} />)}
      </tbody>
    </table>
  );
};

export default UserTable;
