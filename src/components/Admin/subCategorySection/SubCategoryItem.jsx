const SubCategoryItem = ({ element }) => {
  return (
    <tr>
      <td className="  ps-2 pt-2 pb-2">{element.name}</td>
      <td className="w-3/6 ps-2 pt-2 pb-2 ">
        <div id="subcategory-description">{element.description}</div>
      </td>
      <td className=" ps-2 pt-2 pb-2 "> {element.status ? "Si" : "No"}</td>

      <td className="w-32 ps-2 pt-2 pb-2">
        <div className=" flex justify-center">
          <button
            className="me-2 border hover:bg-black/10"
            title="Editar"
            id={element.idSubCategory}
          >
            <ion-icon name="create-outline"></ion-icon>{" "}
          </button>
          <button
            className=" border hover:bg-black/10"
            id={element.idSubCategory}
            title="Eliminar"
          >
            <ion-icon name="trash-outline"></ion-icon>{" "}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SubCategoryItem;
