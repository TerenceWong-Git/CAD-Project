import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </div>
  );
}

export default App;
