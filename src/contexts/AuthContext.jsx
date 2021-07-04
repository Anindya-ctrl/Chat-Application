import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleAuthProvider } from '../firebaseSetup';
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);

    const login = () => {
        return auth.signInWithPopup(googleAuthProvider)
            .catch(err => console.error(err));
    }

    const logout = () => {
        return auth.signOut()
            .catch(err => console.error(err));
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
    });

    const value = {
        currentUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={ value }>
            { !loading && children }
        </AuthContext.Provider>
    );
}
