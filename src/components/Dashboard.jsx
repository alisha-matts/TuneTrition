// client/src/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));

    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPlaylists(res.data.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      {profile && (
        <div>
          <p>Logged in as: {profile.display_name}</p>
          <img src={profile.images[0]?.url} alt="Profile" width={100} />
        </div>
      )}
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((pl) => (
          <li key={pl.id}>{pl.name}</li>
        ))}
      </ul>
    </div>
  );
}
