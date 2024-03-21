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
import BasePoint from './page/BasePoint/BasePoint';
import ExcellentStudent from './page/ExcellentStudent/ExcellentStudent';
import ExcellentStudentDetail from './page/ExcellentStudent/ExcellentStudentDetail';
import CarrerTrends from './page/CarrerTrends/CarrerTrends';
import AboutTDTU from './page/aboutTDTU/AboutTDTU';
import NewsDetail1 from './News/NewsDetail/NewsDetail1';
import ImageAboutTDTU from './page/ImageAboutTDTU/ImageAboutTDTU';
import Holland from './page/Holland/Holland';
import HollandQuizz from './page/Holland/HollandQuizz';

// import Register from "../../SignUp/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<Register />} />
                <Route path="/QuizzPersonality" element={<QuizzPersonality />} />
                <Route path="/mbti-intro" element={<MBTIIntro />} />
                <Route path="/mbtiquizz" element={<MBTIQuizz />} />
                <Route path="/Holland" element={<Holland />} />
                <Route path="/HollandQuizz" element={<HollandQuizz />} />

                <Route path="/news" element={<News />} />
                <Route path="/CalculateScore" element={<CalculateScore />} />
                <Route path="/detail/:id" element={<DetailMajors />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/baseScore" element={<BasePoint />} />
                <Route path="/sinh-vien-tieu-bieu" element={<ExcellentStudentDetail />} />
                <Route path="/xu-huong-nganh-nghe-tuong-lai" element={<CarrerTrends />} />
                <Route path="/tin-tuc-tuyen-sinh" element={<NewsDetail1 />} />
                <Route path="/hinh-anh-ve-tdtu" element={<ImageAboutTDTU />} />
                <Route path="/category/0" element={<MBTIIntro />} />
                <Route path="/category/1" element={<Register />} />
                <Route path="/category/2" element={<ExcellentStudent />} />
                <Route path="/category/3" element={<CarrerTrends />} />
                <Route path="/category/4" element={<AboutTDTU />} />
                <Route path="/category/5" element={<ImageAboutTDTU />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
