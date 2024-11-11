import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, SignUpPage } from "./pages";
import "./App.css";
import LoginPage from "./pages/login/Login";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;
