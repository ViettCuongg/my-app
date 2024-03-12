import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage/HomePage';
import Register from './components/SignUp/Register';
import QuizzPersonality from './components/QuizzPersonality/QuizzPersonality';
import MBTIIntro from './components/MBTI/MBTIIntro';
import MBTIQuizz from './components/MBTI/MBTIQuizz/MBTIQuizz';
import News from './News/News';
import CalculateScore from './CalculateScore/CalculateScore';
import DetailMajors from './page/DetailMajors';
import Profile from './page/Profile';

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
                <Route path="/news" element={<News />} />
                <Route path="/CalculateScore" element={<CalculateScore />} />
                <Route path="/detail/:id" element={<DetailMajors />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
