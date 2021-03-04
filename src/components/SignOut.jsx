import React from 'react';
import { auth } from "../services/firebase";

const SignOut = () => {
    return auth().currentUser && (

        <div className="flex-signout">
            <button className="button-logout" onClick={() => auth().signOut()}>Sign Out</button>
        </div>
    );
};

export default SignOut;