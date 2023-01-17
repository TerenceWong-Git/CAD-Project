import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Map from "./pages/Map";
<<<<<<< HEAD
import CommentPage from "./pages/comment/CommentPage";
=======
import UploadGrowTree from "./pages/UploadGrowTree";
>>>>>>> 25fbf92 (add upload grow tree)

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
