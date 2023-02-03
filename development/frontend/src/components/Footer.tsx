import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/landing"} style={{ textDecoration: "none", color: "white" }}>
          Main
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/comments"} style={{ textDecoration: "none", color: "white" }}>
          Comment
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/comments/createComment"} style={{ textDecoration: "none", color: "white" }}>
          Create
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/map"} style={{ textDecoration: "none", color: "white" }}>
          Map
        </Link>
      </Button>
      <Button className="button" variant="contained">
        <Link to={"/userprofile"} style={{ textDecoration: "none", color: "white" }}>
          User
        </Link>
      </Button>
    </div>
  );
}
