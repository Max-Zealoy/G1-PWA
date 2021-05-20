import React, { useState } from 'react';
import './Navbar.css'


function Navbar() {
const [open, setOpen] = useState(false);
    
return (
        <div>
            <nav>
                <div className="logo">CATSNAP</div>
                <ul className="nav-links" 
                style={{transform: open ? "translateX(0px)" : ""}}>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Product</a>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
             {/*   <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i> */}
             <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
    
            </nav>
        </div>
    );
}

export default Navbar;


