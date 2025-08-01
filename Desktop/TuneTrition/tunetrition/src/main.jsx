// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Callback from "./components/Callback.jsx";
import Dashboard from "./components/Dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </HashRouter >
);
