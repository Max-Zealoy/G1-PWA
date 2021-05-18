import React from 'react'
import {Link} from "react-router-dom";
import Chatbubble from '../images//Buttons/Chatbubble.png'
import Megaphone from '../images//Buttons/notification.png'


export default function NavButton() {
    return (
        <div className="ChatNoticeGrid">  
        <div className="Bubble">
        <Link to='../Chat'><img className="Bubble" src={Chatbubble}/></Link>
        </div>
        <div className="Megaphone">
        <Link to='../Activity'><img className="Megaphone" src={Megaphone}/> </Link>
        </div>
        </div>
        
    )

    
}
