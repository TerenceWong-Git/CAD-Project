import { IconContext } from "react-icons";
import { BiCommentDetail, BiHome } from "react-icons/bi";
import { HiPlus } from "react-icons/hi2";
import { FiMapPin } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const toSomePage = (input: any) => {
    window.scrollTo(0, 0);
    navigate(`/${input}`);
  };

  return (
    <div className="footer">
      <div
        onClick={() => {
          toSomePage("landing");
        }}
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
      </div>

      <div
        onClick={() => {
          toSomePage("comments");
        }}
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
      </div>

      <div
        onClick={() => {
          toSomePage("comments/createComment");
        }}
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
      </div>

      <div
        onClick={() => {
          toSomePage("map");
        }}
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
      </div>

      <div
        onClick={() => {
          toSomePage("userprofile");
        }}
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
      </div>
    </div>
  );
}
