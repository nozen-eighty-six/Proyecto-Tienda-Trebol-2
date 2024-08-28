import { NavLink } from "react-router-dom";

const NavAdmin = ({ handleMenuAdmin, cloud }) => {
  const handleClick = (e) => {
    console.log(e.target);
    const $todosA = document.querySelectorAll(".navegacion-ad a");
    if (e.target.matches(".barra-lateral .navegacion-ad a")) {
      e.preventDefault();
      e.stopPropagation();
      $todosA.forEach((el) => el.removeAttribute("id"));
      e.target.setAttribute("id", "inbox");
    }
    if (e.target.matches(".navegacion-ad a *")) {
      $todosA.forEach((el) => el.removeAttribute("id"));
      //e.target.parentElement.preventDefault();
      // e.target.parentElement.stopPropagation();
      e.target.parentElement.setAttribute("id", "inbox");
    }
  };
  return (
    <nav className="navegacion-ad" onClick={handleClick}>
      <ul>
        <li>
          <NavLink to="/admin/users" data-ruta="/users" data-scroll-spy>
            {" "}
            <ion-icon name="person"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Usuarios</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/suppliers"
            data-ruta="/proveedores"
            data-controlador="proveedores"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            {" "}
            <ion-icon name="person-circle"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Proveedores</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/products"
            data-controlador="productos"
            data-table="tablaProductos"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            {" "}
            <ion-icon name="cube"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Productos</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/subcategories"
            data-controlador="marcas"
            data-table="tablaMarcas"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            {" "}
            <ion-icon name="pricetag"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>SubCategorías</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/categories"
            data-controlador="categorias"
            data-table="tablaCategorias"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            {" "}
            <ion-icon name="list"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Categorías</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/discounts"
            data-controlador="categorias"
            data-table="tablaCategorias"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            {" "}
            <ion-icon name="list"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Descuento</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/orders"
            data-controlador="pedidos"
            data-table="tablaPedidos"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            <ion-icon name="receipt-outline"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Pedidos</span>{" "}
          </NavLink>
        </li>
        {/*Me falta probar las secciones agregadas recientemente */}
        <li>
          <NavLink
            to="/admin/store-entrace"
            data-controlador="entradas"
            data-table="tablaEntradas"
            data-scroll-spy
            onClick={handleMenuAdmin}
          >
            <ion-icon name="bus-outline"></ion-icon>{" "}
            <span className={`${cloud && "oculto"}  `}>Entradas</span>{" "}
          </NavLink>
        </li>
        {/*
              <li th:if="${usuario.tipo == 'ADMIN'}"><a th:href="@{/ventas}" data-controlador="ventas"
              data-table="tablaVentas" data-scroll-spy><ion-icon
                      name="cash-outline"></ion-icon> <span>Ventas</span> </a></li>
              */}
      </ul>
    </nav>
  );
};

export default NavAdmin;
