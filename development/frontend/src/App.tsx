import "./App.css";
import { Route, Routes } from "react-router";

import NotyetLoginLanding from "./pages/NotyetLoginLanding";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LandingPage from "./pages/LandingPage";
import CommentPage from "./pages/comment/CommentPage";
import CommentDetail from "./pages/comment/CommentDetail";
import CreateComment from "./pages/comment/CreateComment";
import UserComment from "./pages/comment/UserComment";
import EditComment from "./pages/comment/EditComment";
import Map from "./pages/place/Map";
import List from "./pages/place/List";
import PlaceDetail from "./pages/place/PlaceDetail";
import UserProfile from "./pages/user/UserProfile";
import PetProfile from "./pages/pet/PetProfile";
import CreatePetProfile from "./pages/pet/CreatePetProfile";
import WeightRecord from "./pages/pet/WeightRecord";
import GrowTree from "./pages/pet/GrowTree";
import UploadGrowTree from "./pages/pet/UploadGrowTree";
import Vaccine from "./pages/pet/Vaccine";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<PrivateRoute />}>
        </Route> */}

      <Route path="/initialLanding" element={<NotyetLoginLanding />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="/landing" element={<LandingPage />}></Route>

      <Route path="/comments" element={<CommentPage />}></Route>
      <Route path="comments/commentDetail/:id" element={<CommentDetail />}></Route>
      <Route path="comments/createComment" element={<CreateComment />}></Route>
      <Route path="comments/myComments" element={<UserComment />}></Route>
      <Route path="comments/editComment/:id" element={<EditComment />}></Route>

      <Route path="/map" element={<Map />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/list/placeDetail/:id" element={<PlaceDetail />}></Route>

      <Route path="/userprofile" element={<UserProfile />}></Route>
      <Route path="/petprofile/:id" element={<PetProfile />}></Route>
      <Route path="/createpetprofile" element={<CreatePetProfile />}></Route>
      <Route path="/weight/:id" element={<WeightRecord />}></Route>
      <Route path="/growtree/:id" element={<GrowTree />}></Route>
      <Route path="/uploadgrowtree/:id" element={<UploadGrowTree />}></Route>
      <Route path="/vaccine/:id" element={<Vaccine />}></Route>
    </Routes>
  );
}
