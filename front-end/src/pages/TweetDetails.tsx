import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Tweet from "../components/Tweet";
import "../styles/timeline.css";

function TweetDetails() {
  const location = useLocation();
  const tweet = location.state;

  return (
    <div className="text-black">
      <div className="absolute left-10 top-10">
        <NavLink
          to="/"
          className="text-black hover:no-underline hover:underline hover:text-[#1DA1F2]"
        >
          ⮌ Timeline
        </NavLink>
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
