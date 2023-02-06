import "./InitialLanding.css";
import { useNavigate } from "react-router";
import { useAppSelector } from "../redux/Hook";

export default function InitialLanding() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  const navigate = useNavigate();
  const login = () => {
    if (isAuth) {
      navigate("/landing");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="initialLandingBox">
      <div className="initialLandingContainer">
        <div className="initialLandingTitleArea">Wikipetia</div>
        <div className="initialLandingSlogan">Life is exploring more </div>
        <div className="initialLandingLogin">
          <button onClick={login}>Let's GO!</button>
        </div>
        <div className="initialLandingovalArea">
          <div className="initialLandingovalBackgroundImg">
            <img src={"/uploads/initialLanding.jpeg"} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
