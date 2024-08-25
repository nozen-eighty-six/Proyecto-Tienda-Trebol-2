const UserItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.name}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.phone}</td>
      <td className=" ps-2 pt-2 pb-2 ">{element.email}</td>

      <td className=" ps-2 pt-2 pb-2">{element.roles[0].name}</td>
    </tr>
  );
};

export default UserItem;
