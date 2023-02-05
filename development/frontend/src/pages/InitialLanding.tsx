import "./InitialLanding.css";
import { useNavigate } from "react-router";

export default function InitialLanding() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  return (
    <div className="initialLandingContainer">
      <div className="initialLandingTitleArea">Wikipetia</div>
      <div className="initialLandingSlogan">Life is exploring more </div>
      <div className="initialLandingLogin">
        <button type="button" onClick={login}>
          Let's GO!
        </button>
      </div>
      <div className="initialLandingovalArea">
        <div className="initialLandingovalBackgroundImg">
          <img src={"/uploads/initialLanding.jpeg"} alt={""} />
        </div>
      </div>
    </div>
  );
}
