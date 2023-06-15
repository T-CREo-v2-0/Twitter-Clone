import { useNavigate, useLocation } from "react-router-dom";
import Tweet from "../components/Tweet";

function TweetDetails() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const location = useLocation();
  const tweet = location.state;

  return (
    <>
      <div className="absolute left-10 top-10">
        <button
          className="bg-transparent hover:bg-slate-600 text-slate-600 font-semibold hover:text-white py-2 px-4 border border-slate-600 hover:border-transparent rounded"
          type="button"
          onClick={navigateToHome}
        >
          Back to Timeline
        </button>
      </div>
      <div className="w-full bg-white mb-4 rounded-xl overflow-hidden max-w-xl min-w-xl text-black">
        <Tweet tweet={ tweet } />
      </div>
    </>
  );
}

export default TweetDetails;
