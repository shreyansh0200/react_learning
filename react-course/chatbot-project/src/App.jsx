import { useState } from 'react'
import './App.css'
import { Chatbot } from "supersimpledev";



import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';




function App(){
            const [chatMessage,setChatMessage] =useState([

                {message: "hello chatbot",
                        sender: "user",
                        id: "id1"
                },
                {message: "How can i help you!",
                        sender: "robot",
                        id: "id2"
                }
            ])



            return(
                <div
                   className="app-container"
                >
                    
                    <ChatMessages
                        chatMessage={chatMessage}                    
                    />
                    <ChatInput
                        chatMessage={chatMessage}
                        setChatMessage={setChatMessage} 
                                       
                    />
                    

                </div>
            );
            
        };


export default App
