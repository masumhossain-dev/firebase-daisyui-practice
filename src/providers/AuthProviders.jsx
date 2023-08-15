import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const UserContext = createContext(null)
const AuthProviders = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { createUser, loginUser }
    return (
        <div>
            <UserContext.Provider value={userInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProviders;