import "./Header.css";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/initialLanding");
  };
  return (
    <>
      <div className="header">Name</div>
      <div className="logOut">
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}
