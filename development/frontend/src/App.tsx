import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Map from "./pages/Map";
import CommentPage from "./pages/comment/CommentPage";
import UploadGrowTree from "./pages/UploadGrowTree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/comments" element={<CommentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
