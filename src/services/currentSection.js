export const currentSection = (url) => {
  const listAll = document.querySelectorAll(".navegacion-ad li a");

  listAll.forEach((el) =>
    el.dataset.ruta == url ? (el.id = "inbox") : el.removeAttribute("id")
  );
};
