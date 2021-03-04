import React, { useState, useEffect } from "react";
import { auth, db } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Chat from "./components/Chat";
import "./styles/components/_app.scss";


const App = () => {
    const [user, setUser] = useAuthState(auth());

    return (
        <div className="App">
            <header>
                <h1>Welcome to SaltyChat</h1>
                <SignOut />
            </header>

            <section className="section-chat">
                {user ? <Chat /> : <SignIn />}
            </section>
        </div>
    );
};

export default App;
