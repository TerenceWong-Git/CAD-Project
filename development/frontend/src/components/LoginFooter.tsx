import { IconContext } from "react-icons";
import { BiCommentDetail, BiHome } from "react-icons/bi";
import { HiPlus } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./LoginFooter.css";

export default function LoginFooter() {
  return (
    <div className="footerLogin">
      <div>
        <Link
          to={"/landing"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ style: { color: "black" } }}>
            <BiHome />
          </IconContext.Provider>
        </Link>
      </div>

      <div>
        <Link
          to={"/comments"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ style: { color: "black" } }}>
            <BiCommentDetail />
          </IconContext.Provider>
        </Link>
      </div>
      <div>
        <Link
          to={"/comments/createComment"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ style: { color: "black" } }}>
            <HiPlus />
          </IconContext.Provider>
        </Link>
      </div>

      <div>
        <Link
          to={"/map"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ style: { color: "black" } }}>
            <FiMapPin />
          </IconContext.Provider>
        </Link>
      </div>
      <div>
        <Link
          to={"/userprofile"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconContext.Provider value={{ style: { color: "black" } }}>
            <RiUserLine />
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  );
}
