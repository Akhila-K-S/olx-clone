import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, SignUpPage } from "./pages";
import "./App.css";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

export default App;
