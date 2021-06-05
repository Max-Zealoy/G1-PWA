import React, { useState } from 'react';
import '../styling/Navbar.css'
import {Link} from "react-router-dom";
import Home from '../images/Buttons/homeButton.png'
import Chat from '../images/Buttons/ChatbubbleOrange.png'
import AddBtn from '../images/Buttons/addPhotoButton.png'
import Notification from '../images/Buttons/NotificationButton.png'
import ProfileButton from '../images/Buttons/ProfileButton.png'


function Navbar() {

    let g = useNamedContext('global');

  
    async function logout() {
      await Login.logout();
      delete g.user;
    }

const [open, setOpen] = useState(false);
    
return (
        <div id="Navbar">
            <nav id="Navbar">
         


                <ul className="nav-links" 
                style={{transform: open ? "translateX(0px)" : ""}}>
                   
                    <li>
                    <Link to='../'>
                        <img src={Home} alt='Home' />
                        </Link>
                    </li>
                    
                    <li>
                    <Link to='../Chat'><img src={Chat} alt='Chat' />
                    </Link>
                    </li>
                    
                    <li>
                    <Link to='../Photo-Upload'> <img className="AddBtn" src={AddBtn} alt='AddBtn' />
                   </Link>
                    </li>
                    
                    <li>
                    <Link to='../photos'>
                    <a><img src={Notification} alt='Notification' /></a>
                    </Link>
                    </li>
                    
                    <li>
                   
                    <Link to='../my-photos'> <img className="ProfileButton" src={ProfileButton} alt='ProfileButton' />
                </Link>
                    </li>
                </ul>
     
    {/*        {g.user && <span>
      <span className="text-white">
        Logged in as: {g.user.name} ({g.user.email})
      </span>
      <a className="text-white display d-inlineblock ml-4" href="#" onClick={logout}>
        Log out
      </a>
    </span>}
     */}
            
        
    </nav>
        </div>

  
)}

export default Navbar;



