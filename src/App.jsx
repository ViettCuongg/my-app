import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage/HomePage";
import Register from "./components/SignUp/Register";
import QuizzPersonality from "./components/QuizzPersonality/QuizzPersonality";
import MBTIIntro from "./components/MBTI/MBTIIntro";
import MBTIQuizz from "./components/MBTI/MBTIQuizz/MBTIQuizz";

// import Register from "../../SignUp/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/QuizzPersonality" element={<QuizzPersonality />} />
        <Route path="/mbti-intro" element={<MBTIIntro />} />
        <Route path="/mbtiquizz" element={<MBTIQuizz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
