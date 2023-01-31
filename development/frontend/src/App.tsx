import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./redux/PrivateRoute";
import CommentPage from "./pages/comment/CommentPage";
// import Map from "./pages/place/Map";
import PetProfile from "./pages/pet/PetProfile";
import CreatePetProfile from "./pages/pet/CreatePetProfile";
import WeightRecord from "./pages/pet/WeightRecord";
import CreateComment from "./pages/comment/CreateComment";
import CreatePetProfile2 from "./pages/pet/createPet2";
import LandingPage from "./pages/LandingPage";
import List from "./pages/place/List";
import Multiple from "./components/place/list/multiple";
import Map3 from "./pages/place/Map3";
import CommentDetail from "./pages/comment/CommentDetail";
import UserProfile from "./pages/user/UserProfile";

export default function App() {
  return (
    <div className="App">
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
        <Button variant="contained">
          <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>
            Register
          </Link>
        </Button>
      </div>

      <br></br>

      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/comments" element={<CommentPage />}></Route>
          <Route path="/createComment" element={<CreateComment />}></Route>
          <Route path="/commentDetail/:id" element={<CommentDetail />}></Route>
        </Route>

        <Route path="/landing" element={<LandingPage />}></Route>
        {/* <Route path="/multiple" element={<Multiple />}></Route> */}
        <Route path="/map3" element={<Map3 />}></Route>
        {/* <Route path="/map" element={<Map />}></Route> */}
        <Route path="/list" element={<List />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/petprofile/:id" element={<PetProfile />}></Route>
        <Route path="/createpetprofile" element={<CreatePetProfile />}></Route>
        <Route path="/weight/:id" element={<WeightRecord />}></Route>
        <Route path="/createpetprofile2" element={<CreatePetProfile2 />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
      </Routes>
    </div>
  );
}
