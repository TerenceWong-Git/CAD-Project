import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">Name</div>
      <div className="logOut">
        <button type="button" onClick={onImageRemoveAll}>
          Logout
        </button>
      </div>
    </>
  );
}
