import "./App.css";
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
import Map3 from "./pages/place/Map3";
import CommentDetail from "./pages/comment/CommentDetail";
import UserProfile from "./pages/user/UserProfile";
import GrowTree from "./pages/pet/GrowTree";
import Vaccine from "./pages/pet/Vaccine";
import UserComment from "./pages/comment/UserComment";
import EditComment from "./pages/comment/EditComment";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/comments" element={<CommentPage />}></Route>
          <Route path="comments/createComment" element={<CreateComment />}></Route>
          <Route path="comments/editComment/:id" element={<EditComment />}></Route>
          <Route path="comments/commentDetail/:id" element={<CommentDetail />}></Route>
          <Route path="comments/myComments" element={<UserComment />}></Route>
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
        <Route path="/growtree/:id" element={<GrowTree />}></Route>
        <Route path="/vaccine/:id" element={<Vaccine />}></Route>
      </Routes>
    </div>
  );
}
