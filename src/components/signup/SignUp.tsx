import React from "react";
import Logo from "../../assets/olx-logo.png";
import "./SignUp.css";
import useSignup from "../../hooks/useSignup"; // Import the custom hook

const SignUp: React.FC = () => {
    const { userName, setUserName, email, setEmail, phone, setPhone, password, setPassword, handleSignUp, loading, error } =
        useSignup(); // Use the custom hook

    return (
        <div className="signupParentDiv">
            <img width="200px" height="200px" src={Logo} alt="Logo" />
            <form onSubmit={handleSignUp}>
                <label htmlFor="fname">Username</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="fname"
                    name="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? "Signing up..." : "Signup"}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
            <a href="/login">Login</a>
        </div>
    );
};

export default SignUp;
