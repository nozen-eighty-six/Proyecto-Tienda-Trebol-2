const CategoryItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.name}</td>
      <td className=" ps-2 pt-2 pb-2 "> {element.description}</td>
      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idCategory}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            id={element.idCategory}
            title="Eliminar"
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryItem;
