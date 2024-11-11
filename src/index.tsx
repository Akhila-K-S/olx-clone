import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./context/FirebaseContext";
import { auth, db } from "./firebase/config"; // Import both auth and db from the config file

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ auth, db }}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>
);

reportWebVitals();
