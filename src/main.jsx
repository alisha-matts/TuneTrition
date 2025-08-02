// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Callback from "./components/Callback.jsx";
import Dashboard from "./components/Dashboard.jsx";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("redirect");

if (redirect) {
  window.history.replaceState(null, "", redirect + window.location.search);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter >
);
