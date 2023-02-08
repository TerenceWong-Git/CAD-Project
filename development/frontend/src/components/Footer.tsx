import { IconContext } from "react-icons";
import { BiCommentDetail, BiHome } from "react-icons/bi";
import { HiPlus } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
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
          <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
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
          <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
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
          <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
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
          <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
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
          <IconContext.Provider value={{ style: { color: "#9b6972" } }}>
            <RiUserLine />
          </IconContext.Provider>
        </Link>
      </div>
    </div>
  );
}
