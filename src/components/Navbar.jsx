import React, { useState } from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
import Home from '../images/Buttons/homeButton.png'
import Search from '../images/Buttons/searchButton.png'
import AddBtn from '../images/Buttons/addPhotoButton.png'
import Notification from '../images/Buttons/NotificationButton.png'
import ProfileButton from '../images/Buttons/ProfileButton.png'
import Catlogo from '../images/Buttons/Catlogo.png'

function Navbar() {
const [open, setOpen] = useState(false);
    
return (
        <div>
            <nav>
                <div className="logoText">
                <Link to='/'> <img className="catlogo" src={Catlogo} alt='Catlogo' /><h3>-CATSNAP-</h3>
                </Link>
                </div>


                <ul className="nav-links" 
                style={{transform: open ? "translateX(0px)" : ""}}>
                    <li>
                        
                    </li>
                    <li>
                        <a><img src={Home} alt='Home' /></a>
                    </li>
                    
                    <li>
                    <a><img src={Search} alt='Search' /></a>
                    </li>
                    
                    <li>
                    <Link to='../UploadPage'> <img className="AddBtn" src={AddBtn} alt='AddBtn' />
                </Link>
                    </li>
                    
                    <li>
                    <a><img src={Notification} alt='Notification' /></a>
                    </li>
                    
                    <li>
                   
                    <Link to='../ProfilePage'> <img className="ProfileButton" src={ProfileButton} alt='ProfileButton' />
                </Link>
                    </li>
                </ul>
             {/*   <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i> */}
             <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
    
            </nav>
        </div>
    );
}

export default Navbar;


