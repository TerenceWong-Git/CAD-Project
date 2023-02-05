import "./Header.css";
import { useNavigate } from "react-router";
import { MdPets } from "react-icons/md";
import { useState } from "react";
import { RxExit } from "react-icons/rx";

export default function Header() {
  const navigate = useNavigate();

  const [isTrigger, setIsTrigger] = useState(false);

  const trigger = () => {
    if (isTrigger === false) {
      setIsTrigger(true);
    } else {
      setIsTrigger(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/initialLanding");
  };
  return (
    <>
      <div className="header">
        <div className="logOut">
          Name
          <div onClick={trigger}>
            <MdPets />
          </div>
        </div>
        {isTrigger && (
          <div className="logoutCard">
            <div onClick={logout}>
              <RxExit />
            </div>
            <div className="contactUs">12345678</div>
          </div>
        )}
      </div>
    </>
  );
}
