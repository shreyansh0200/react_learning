
import { useRef,useEffect} from 'react'
import '../App.css'
import { ChatMessage } from './ChatMessage';


export function ChatMessages({chatMessage}){  
            const chatMessageRef=useRef(null);

            useEffect(()=>{
                const containerElem=chatMessageRef.current;
                if(containerElem){
                    containerElem.scrollTop=containerElem.scrollHeight;
                }

            },[chatMessage])   
                     
            return (
                <div
                    className="chat-message-container"
                    ref={chatMessageRef}
                >

                {chatMessage.map((chatMessage)=>{
                        return (
                            <ChatMessage
                                message={chatMessage.message}
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                            />
                        );
                    })}
                </div>
            )        
            
        }