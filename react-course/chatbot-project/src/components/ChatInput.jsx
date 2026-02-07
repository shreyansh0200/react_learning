import { useState } from 'react'
import { Chatbot } from "supersimpledev";
// import  './components/ChatInput';

import '../App.css'


export function ChatInput({chatMessage,setChatMessage}){
            const [inputText,setInputText]=useState('');
            const [isLoding,setIsLoding]=useState(false)
            async function sentMessage(){               
                

                if(isLoding||inputText===""){/*return when isLoding is true :) */
                    return;
                }
                setIsLoding(true);
                setInputText('');
                const newChatMessage=[
                    ...chatMessage,
                        {
                            message: inputText,
                            sender: "user",
                            id: crypto.randomUUID()
                        }

                ]
                setChatMessage([
                    ...newChatMessage,
                        {
                            message: "Loding......",
                            sender: "robot",
                            id: crypto.randomUUID()
                        }

                ]);
                const response=await(Chatbot.getResponseAsync(inputText));
                setChatMessage([
                    ...newChatMessage,
                        {
                            message: response,
                            sender: "robot",
                            id: crypto.randomUUID()
                        }

                    ]);
                setIsLoding(false) ;                   

                }
                 function saveInputText(event){
                     setInputText(event.target.value);
               }
          
                return (
                    <div
                       className="chat-input-container"
                    >
                        <input 
                            className="chat-input"
                            placeholder="send message to chatbot"
                            size="30"
                            value={inputText}
                            onChange={saveInputText}
                            onKeyDown={(event)=>{ if(event.key==="Enter"){
                                sentMessage()
                            }}
                            }

                            
                        />
                        <button
                           className="sent-button"
                            onClick={sentMessage}
                            
                        >Send</button>

                    </div>
            )

        };