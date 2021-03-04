import React from 'react';
import { auth } from "../services/firebase";

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new auth.GoogleAuthProvider();
        auth().signInWithPopup(provider);
    }

    return (
        <button className="button-login" onClick={signInWithGoogle}>Sign In With Google</button>
    );
};

export default SignIn;
