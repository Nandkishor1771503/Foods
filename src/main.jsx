import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Roti from "./components/Roti.jsx";
import Paneer from "./components/Paneer.jsx";
import Manchuria from "./components/Manchuria.jsx";
import Rice from "./components/Rice.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/one" element={<Roti />} />
      <Route path="/second" element={<Paneer/>} />
      <Route path="/third" element={<Manchuria />} />
      <Route path="/fourth" element={<Rice/>} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
