// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { FirebaseContext } from "./context/FirebaseContext";
// import firebase from "./firebase/config";
// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <React.StrictMode>
//         <FirebaseContext.Provider value={{ firebase }}>
//             <App />
//         </FirebaseContext.Provider>
//     </React.StrictMode>
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext } from "./context/FirebaseContext";
import { auth } from "./firebase/config"; // Importing auth from the config file

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: auth }}>
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>
);

reportWebVitals();
