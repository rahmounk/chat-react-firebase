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
        <div className="App" style={{backgroundImage:`url("https://www.publicdomainpictures.net/pictures/280000/velka/gradient-colors-blur-background-1542457654NlA.jpg")`}}>
            <header>
                <h1>Welcome to SaltyChat</h1>
                <SignOut />
            </header>

            <section className="section-chat">
                <div className="container-chat">
                    {user ? <Chat /> : <SignIn />}
                </div>
            </section>
        </div>
    );
};

export default App;
