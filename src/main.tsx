import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import Profile from "./components/pages/profile";
import TweetDetails from "./components/pages/TweetDetails";
import './index.css'
import "./App.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Profile />} />
      <Route path="/:username/status/:id" element={<TweetDetails />} />
    </Routes>
  </BrowserRouter>,
)
