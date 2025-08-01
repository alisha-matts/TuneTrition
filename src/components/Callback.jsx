// client/src/Callback.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Callback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code");

    if (code) {
      axios
        .post("http://localhost:3001/auth/token", {
          code,
          redirect_uri: "https://alisha-matts.github.io/TuneTrition/callback",
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [location, navigate]);

  return <div>Authorizing...</div>;
}
