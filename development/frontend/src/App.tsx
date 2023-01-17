import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Map from "./pages/Map/Map";
import { Link } from "react-router-dom";
import CommentPage from "./pages/comment/CommentPage";

function App() {
  return (
    <div className="App">
      <Link to={"/login"}>Login</Link>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/comments" element={<CommentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
