import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
import UserProfile from "./pages/UserProfile";
import TweetDetails from "./pages/TweetDetails";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Timeline />} />
      <Route path="/:id" element={<UserProfile />} />
      <Route path="/:username/status/:id" element={<TweetDetails />} />
    </Routes>
  </BrowserRouter>
);
