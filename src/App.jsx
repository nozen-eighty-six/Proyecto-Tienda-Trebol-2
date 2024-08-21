import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoutes from "./components/Routes/PublicRoutes";
import Login from "./pages/Login";
import PaymentSuccess from "./components/Tienda/Cart/PaymentSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PublicRoutes />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
