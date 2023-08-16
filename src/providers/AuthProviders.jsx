import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
//create auth
const auth = getAuth(app);

//Create context
export const UserContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)

    //firebase authentication function create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(() => { })
    }

    //use onAuthStateChange under useEffect for hold current logged In user data.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    //create a object for context provider value. Ex: <UserContext.Provider value={userInfo}>
    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut
    }
    return (
        <div>
            <UserContext.Provider value={userInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProviders;