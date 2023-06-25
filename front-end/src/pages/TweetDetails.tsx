import { useNavigate, useLocation } from "react-router-dom";
import Tweet from "../components/Tweet";
import "../styles/timeline.css";

function TweetDetails() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const location = useLocation();
  const tweet = location.state;

  return (
    <div className="text-black">
      <div className="absolute left-10 top-10">
        <button
          className="bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-600 hover:border-transparent rounded"
          type="button"
          onClick={navigateToHome}
        >
          Back to Timeline
        </button>
      </div>
      <div className="container text-black">
        <div>
          <Tweet tweet={tweet} />
        </div>
      </div>
    </div>
  );
}

export default TweetDetails;
