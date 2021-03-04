import React, { useState, useEffect } from 'react'
import firebase, {auth, db} from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";



const Chat = () => {
    const messagesRef = db.collection("messages");
    const query = messagesRef.orderBy("createdAt").limitToLast(25);

    const [messages] = useCollectionData(query , {idField : "id"});
    const [formValue, setFormValue] = useState ("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL, displayName} = auth().currentUser;
        await messagesRef.add({
            text:formValue,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid, photoURL, displayName
        })
        setFormValue("");
    }

    return (
        <>
            <main className="Chat" style = {{backgroundImage:`url("https://i.pinimg.com/originals/92/42/05/924205ea89862667d9de018b820019fd.jpg")`}}>
                {messages && messages.map((msg) => 
                    <ChatMessage key={msg.id} message ={msg}/>
                )} 
            </main>
            <form className="form-chat" onSubmit={sendMessage}>
                <a href=""><i className="fas fa-plus"></i></a>
                <a href=""><i className="fas fa-link"></i></a>
                
                <input className="input-text" type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something salty !"/>
                <button className="button-send" type="submit" disabled={!formValue}>SALT !</button>

            </form>
        </>
    );
};


export default Chat;