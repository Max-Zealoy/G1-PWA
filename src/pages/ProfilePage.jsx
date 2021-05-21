import React from 'react'
import Lady from '../images/CrazyLady.png'
import Edit from '../images/Edit.png'
import Notification from '../images/NotificationBar.png'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'

import '../styling/ProfilePage.css'
import cat1 from '../images/cats/cat1.jpg'
import cat2 from '../images/cats/cat2.jpg'
import cat3 from '../images/cats/cat3.jpg'
import cat4 from '../images/cats/cat4.jpg'
import cat5 from '../images/cats/cat5.jpg'
import cat6 from '../images/cats/cat6.jpg'




export default function ProfilePage() {




  return (
    <div>
    <Navbar/>
    <SimpleButton/>
    <div className="GridProfile">
      <h1 className="Title">My Profile</h1>
      <h2 className="Notification">Push notification</h2>
    
      <img className="Lady"src={Lady} alt="Avatar"></img>
      <img className="Edit"src={Edit} alt="Edit"></img> 
      <img className="NotificationBar"src={Notification} alt="Bar"></img>   
      <h2 className="ProfileName">Crazy_cat_lady</h2>
      <h2 className="Email">crazy_cat_lady@gmail.com</h2>
      <h2 className="Following">Following</h2>
      <h2 className="Fifty">50</h2>
      <h2 className="Followers">Followers</h2>
      <h2 className="FiveH">500</h2>
      <h2 className="UploadedPictures">Pictures</h2>
      <h2 className="FiveT">5000</h2>


      </div>

      <div className="GridProfilePictures">
      <img className="Cat1"src={cat1} alt="Cat1"></img> 
      <img className="Cat2"src={cat2} alt="Cat2"></img> 
      <img className="Cat3"src={cat3} alt="Cat3"></img> 
      <img className="Cat4"src={cat4} alt="Cat4"></img> 
      <img className="Cat5"src={cat5} alt="Cat5"></img> 
      <img className="Cat6"src={cat6} alt="Cat6"></img> 

      </div>
    </div>
  )

  
}

  