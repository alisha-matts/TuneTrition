// client/src/App.jsx
const clientId = "f0a746abed294e4eaf343ff41e829a94";
const redirectUri = "http://localhost:5173/callback";
const scopes = ["user-read-private", "user-read-email", "playlist-read-private"];

const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
  redirectUri
)}&scope=${encodeURIComponent(scopes.join(" "))}`;

export default function App() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Spotify OAuth Demo</h1>
      <a href={loginUrl}>
        <button>Login with Spotify</button>
      </a>
    </div>
  );
}
