// import React, { useState, useContext } from "react";

// import Logo from "../../assets/olx-logo.png";
// import "./SignUp.css";
// import { FirebaseContext } from "../../context/FirebaseContext";

// export default function SignUp() {
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [password, setPassword] = useState("");
//     const { firebase } = useContext(FirebaseContext);

//     const handleSignUp = (e: any) => {
//         e.preventDefault();
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then((res: any) => {
//                 console.log(res);
//                 res.user.updateProfile({ displayName: userName });
//             });
//     };

//     return (
//         <div>
//             <div className="signupParentDiv">
//                 <img width="200px" height="200px" src={Logo}></img>
//                 <form onSubmit={handleSignUp}>
//                     <label htmlFor="fname">Username</label>
//                     <br />
//                     <input
//                         className="input"
//                         type="text"
//                         id="fname"
//                         name="name"
//                         defaultValue="John"
//                         value={userName}
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                     <br />
//                     <label htmlFor="fname">Email</label>
//                     <br />
//                     <input
//                         className="input"
//                         type="email"
//                         id="fname"
//                         name="email"
//                         defaultValue="John"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <br />
//                     <label htmlFor="lname">Phone</label>
//                     <br />
//                     <input
//                         className="input"
//                         type="number"
//                         id="lname"
//                         name="phone"
//                         defaultValue="Doe"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                     />
//                     <br />
//                     <label htmlFor="lname">Password</label>
//                     <br />
//                     <input
//                         className="input"
//                         type="password"
//                         id="lname"
//                         name="password"
//                         defaultValue="Doe"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <br />
//                     <br />
//                     <button>Signup</button>
//                 </form>
//                 <a>Login</a>
//             </div>
//         </div>
//     );
// }

import React, { useState, useContext } from "react";
import Logo from "../../assets/olx-logo.png";
import "./SignUp.css";
import { FirebaseContext } from "../../context/FirebaseContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp: React.FC = () => {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { firebase } = useContext(FirebaseContext); // Access firebase auth from context

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(firebase, email, password);
            if (res.user) {
                await updateProfile(res.user, { displayName: userName });
                console.log("User created successfully:", res.user);
            }
        } catch (error: any) {
            console.error("Error creating user:", error.message);
        }
    };

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
                <button type="submit">Signup</button>
            </form>
            <a href="/login">Login</a>
        </div>
    );
};

export default SignUp;
