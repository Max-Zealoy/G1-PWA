import React, { useState } from 'react';
import './Navbar.css'
import Home from '../images/Buttons/homeButton.png'
import Search from '../images/Buttons/searchButton.png'
import AddBtn from '../images/Buttons/addPhotoButton.png'
import Notification from '../images/Buttons/NotificationButton.png'
import ProfileButton from '../images/Buttons/ProfileButton.png'

function Navbar() {
const [open, setOpen] = useState(false);
    
return (
        <div>
            <nav>
                <div className="logoText"><h3>-CATSNAP-</h3></div>


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
                    <a><img src={AddBtn} alt='AddBtn' /></a>
                    </li>
                    
                    <li>
                    <a><img src={Notification} alt='Notification' /></a>
                    </li>
                    
                    <li>
                    <a><img src={ProfileButton} alt='ProfileButton' /></a>
                    </li>
                </ul>
             {/*   <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i> */}
             <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
    
            </nav>
        </div>
    );
}

export default Navbar;


