// import { createContext } from "react";

// export const FirebaseContext = createContext<any>(null);

import { createContext } from "react";
interface IfirebaseProps {
    auth: any;
    db: any;
}
// Create the Firebase Context with `auth`
export const FirebaseContext = createContext<IfirebaseProps>({
    auth: null,
    db: null,
});
