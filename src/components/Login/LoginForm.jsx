import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import helpHttp from "../../hooks/helpHttp";
import { SERVER_URL } from "../../Const/server";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import "../../../public/css/login.css";
import Back from "../Reusable/Back";
import CartItemAlert from "../Tienda/Cart/CartItemAlert";
import { useForm } from "../../hooks/useForm";

function validateFormLogin(form) {
  let errors = {};
  //^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$
  let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (form.email.trim() === "") {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El email no es válido";
  }

  if (form.password.trim() === "") {
    errors.password = "El campo contraseña es requerido";
  }

  return errors;
}

const initialForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialForm);
  const { error, setError, handleBlur } = useForm(validateFormLogin, form);
  const [validForm, setValidForm] = useState(null);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    handleBlur(e);
  };

  const validateForm = () => {
    let valide = true;
    if (form.email.trim() === "" || form.password.trim() === "") {
      valide = false;
    }
    setValidForm(valide);
    return valide;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm() == false) return;

    console.log("Formulario enviado");

    let fetchLogin = await fetch(SERVER_URL + "user/verificar", {
      body: JSON.stringify(form),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (fetchLogin.ok) {
      let res = await fetchLogin.json();
      console.log(res);
      saveUserInLocalStorage(res);
      await generateToken();
    }
  };

  async function generateToken() {
    try {
      const url = SERVER_URL + "login";
      const data = {
        email: form.email,
        password: form.password,
      };
      console.log(data);

      let fetchToken = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Convertir el objeto `data` a una cadena JSON
      });

      console.log(fetchToken);

      if (fetchToken.ok) {
        const token = await fetchToken.json();
        console.log(token);
        saveTokenInCookies(token);
      } else {
        console.log("Error:", fetchToken.status, fetchToken.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function saveTokenInCookies(token) {
    setCookie("token", token);
  }

  // Función para establecer una cookie
  function setCookie(name, value) {
    let expires = "";
    const date = new Date();
    date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();

    document.cookie =
      name +
      "=" +
      (value || "") +
      expires +
      "; path=/; Secure; HttpOnly; SameSite=Strict";
  }

  function saveUserInLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser({ user }));
    redirectUser(user);
  }

  function redirectUser(user) {
    setLoader(true);

    if (user.roles[0].name === "ADMIN") {
      console.log("Admin");
      setTimeout(() => {}, 2500);
    } else {
      console.log("User");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  }
  return (
    <div className=" relative flex justify-center items-center bg-slate-50 h-screen">
      <div className="login-container " id="container">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form className="login" onSubmit={handleSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Iniciar Sesion
            </label>
            <p>
              Utiliza tu correo electronico y contraseña para iniciar sesión
            </p>
            <div className="flex flex-col justify-center items-center">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                title="El email debe ser correcto"
                value={form.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                className="transition focus:bg-white focus:outline focus:outline-1"
              />
              <label
                htmlFor=""
                className=" block text-start  text-sm custom-red-text font-bold"
              >
                {error.email || ""}
              </label>
            </div>
            <div className="flex flex-col justify-center items-center">
              <input
                type="password"
                placeholder="Contraseña"
                id="password"
                name="password"
                required=""
                value={form.password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className="transition focus:bg-white focus:outline focus:outline-1"
              />
              <label
                htmlFor=""
                className=" block text-start  text-sm font-bold custom-red-text "
              >
                {error.password || ""}
              </label>
            </div>
            {loader == false && (
              <button id="iniciarSesion" className="custom-red">
                Iniciar Sesión
              </button>
            )}

            {loader && (
              <button id="iniciarSesion" className="custom-red">
                <div className="flex justify-center items-center">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(1 1)" strokeWidth="2">
                        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </path>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            )}
            <br />
            <p id="log">
              Si aún no tiene cuenta,{" "}
              <a href="/registro" style={{ color: "blue{" }}>
                aquí puede registrarse
              </a>
            </p>
          </form>
        </div>
      </div>
      <CartItemAlert validForm={validForm} setValidForm={setValidForm} />
      <Back />
    </div>
  );
};

export default LoginForm;
