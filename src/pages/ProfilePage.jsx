import React from 'react'
import Lady from '../images/CrazyLady.png'
import Edit from '../images/Edit.png'
import Notification from '../images/NotificationBar.png'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'

import '../styling/ProfilePage.css'


export default function ProfilePage() {




  return (
    <div>
    <Navbar/>
    <SimpleButton/>
    <div className="GridProfile">
      <h1 className="Title">My Profile</h1>
      <h2 className="Notification">Push notification</h2>
      <h2 className="Off">Off</h2>
      <h2 className="On">On</h2>
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
    </div>
  )

  
}

  