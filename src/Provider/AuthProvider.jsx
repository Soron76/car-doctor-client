import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firabase.config";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const createUser = (email, passward) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, passward);
    }

    const signIn = (email, passward) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, passward)
    }


    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoding(false)
            console.log('current user', currentUser);
        });
        return () => {
            return unSubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;