import "./Header.css";

export default function Header() {
  const logout = () => {
    localStorage.removeItem("token");
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
