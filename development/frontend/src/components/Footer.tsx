import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>
      </Button>
      <Button className="button" variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>
          Register
        </Link>
      </Button>
      <Button className="button" variant="contained">
        <Link to={"/landing"} style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Button>
    </div>
  );
}
