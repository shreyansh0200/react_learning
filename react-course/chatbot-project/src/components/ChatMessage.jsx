
import robotProfileImage from "../assets/robot.png"
import userProfileImage from "../assets/user.png"
import '../App.css'
import dayjs from "dayjs"

export function ChatMessage({message,sender}){
            const time=dayjs().valueOf();
                       

            return (
             <div
                className={sender==='user'? 'chat-message-user':'chat-message-robot'}
                
             >
            
                {sender==="user"&& (
                    <img src={userProfileImage} className="chat-message-profile"/>
                )}
                <div 
                   className="chat-message-text"
                >
                   <b> {message}</b>
                <div 
                  
                >
                  {dayjs(time).format("HH:mm")}
                    
                </div>
                    
                </div>

                
                {sender==="robot"&& (
                    <img src={robotProfileImage} className="chat-message-profile"/>
                )}

             </div>
        )
        };