import { auth } from "../services/firebase";


const ChatMessage = ({message}) => {
    const { text , uid, photoURL, displayName} = message;

    const messageClass = uid === auth().currentUser.uid ? "sent" : "received";

    return (
        <div className={`message-${messageClass}`}>
                <img src={ photoURL || "https://i.pinimg.com/originals/8a/34/ba/8a34ba71d213330b1ac2c72388bae527.jpg" } width="54px" alt="User photo"/>
                <p className="p-pseudo"> {displayName} </p> 
                <p>{text}</p>    
        </div>
    );
};

export default ChatMessage;