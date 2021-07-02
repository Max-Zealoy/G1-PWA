import React from 'react'
import {Link} from "react-router-dom";
import Chatbubble from './images/Buttons/Chatbubble.png'
import Megaphone from './images/Buttons/notification.png'


export default function NavButton() {

    let g = useNamedContext('global');

    
    async function logout() {
        await Login.logout();
        delete g.user;
      }

    return (
        <div className="ChatNoticeGrid">  
        <div className="Bubble">
        <Link to='../Chat'><img className="Bubble" src={Chatbubble}/></Link>
        </div>

        {g.user && 
        <span className="ChatemailButton">
            
        Logged in as: {g.user.name} ({g.user.email})

        <a href="./#" onClick={logout}>
        Log out
      </a></span>}

        <div className="Megaphone">
        <Link to='../Activity'><img className="Megaphone" src={Megaphone}/> </Link>
        </div>
        </div>
        
    )

    
}
