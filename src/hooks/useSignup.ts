import { useState, useContext } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { FirebaseContext } from "../context/FirebaseContext";
import { useNavigate } from "react-router-dom";

// Define the custom hook for signup
const useSignup = () => {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { auth, db } = useContext(FirebaseContext);

    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset previous errors

        try {
            // Create user with email and password
            const res = await createUserWithEmailAndPassword(auth, email, password);

            if (res.user) {
                // Update user profile with the display name
                await updateProfile(res.user, { displayName: userName });

                // Save user details to Firestore
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName: userName,
                    email: email,
                    phone: phone,
                    createdAt: new Date(),
                });

                console.log("User created successfully:", res.user);

                // Navigate to login page after successful signup
                navigate("/login");
            }
        } catch (error: any) {
            setError(error.message); // Set error message
            console.error("Error creating user:", error.message);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return {
        userName,
        setUserName,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        handleSignUp,
        loading,
        error,
    };
};

export default useSignup;
