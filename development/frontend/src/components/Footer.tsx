import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BiCommentDetail,  BiHome } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { HiMapPin} from "react-icons/hi2";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <Button className="button" variant="contained" style={{ marginRight: "2vmin"}}>
        <Link to={"/landing"} style={{ textDecoration: "none", display:"flex", justifyContent: "center", alignItems: "center"}}>
        <BiHome />
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/comments"} style={{ textDecoration: "none", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <BiCommentDetail />
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/comments/createComment"} style={{ textDecoration: "none", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <HiPlus />
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/map"} style={{ textDecoration: "none", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <FiMapPin />
        </Link>
      </Button>
      <Button className="button" variant="contained">
        <Link to={"/userprofile"} style={{ textDecoration: "none", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <RiUserLine/>
        </Link>
      </Button>
    </div>
  );
}
