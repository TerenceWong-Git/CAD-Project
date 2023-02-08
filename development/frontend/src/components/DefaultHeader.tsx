import "./DefaultHeader.css";
import { useNavigate } from "react-router";
import { MdPets } from "react-icons/md";
import { useState } from "react";
import { RxExit } from "react-icons/rx";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

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
  };
  return (
    <>
      <div className="headerDefault">
        <div className="headerLogo">
          <img src={"/uploads/banner.png"} alt={""} />
        </div>
        <div className="logOutDefault">
          <div onClick={trigger}>
            <MdPets style={{ color: "#9b6972" }} />
          </div>
        </div>
        {isTrigger && (
          <div className="logoutCardDefault">
            <div className="logoutCardButton" onClick={logout}>
              <a href="https://www.wikipetia.me/">
                <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
                  <RxExit />
                </IconContext.Provider>
              </a>
            </div>
            <div className="logOutCardContact">
              <div className="contactUs">聯絡我們</div>
              <div className="contactUs">
                <AiOutlinePhone /> +852 2121 3131
              </div>
              <div className="contactUs">
                <AiOutlineMail />
                wikipetia@gmail.com
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
