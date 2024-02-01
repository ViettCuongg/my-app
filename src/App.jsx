import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage/HomePage";
import Register from "./components/SignUp/Register";

// import Register from "../../SignUp/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
