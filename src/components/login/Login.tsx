import React, { useContext, useState } from "react";

import Logo from "../../assets/olx-logo.png";
import "./Login.css";
import { FirebaseContext } from "../../context/FirebaseContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const { auth, db } = useContext(FirebaseContext);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in successfully:", res);
        } catch (error: any) {
            console.error("Error signing in:", error.message);
            setError(error.message); // Handle error and display message
        }
    };

    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        name="email"
                        defaultValue="John"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="lname"
                        name="password"
                        defaultValue="Doe"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <a>Signup</a>
            </div>
        </div>
    );
}

export default Login;
