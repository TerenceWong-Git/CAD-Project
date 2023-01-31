import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Button variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </Button>
      <Button variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>
      </Button>
      <Button variant="contained" style={{ marginRight: "2vmin" }}>
        <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>
          Register
        </Link>
      </Button>
      <Button variant="contained">
        <Link to={"/landing"} style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </Button>
    </div>
  );
}
