import React from 'react'
import '../styling/UploadPage.css'
import CatPicture from '../images/Buttons/Ted.png'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'






function Upload() {
    return (
<div>
        <Navbar/>
        <SimpleButton/>

        <div className="Uploadpicture">
            <h2>Uploading a picture? Pawsome!</h2>
                <div className='TedPicture'>
            <a><img src={CatPicture} alt='CatPicture' /></a>
                </div>
            <div className="mb-1">
            <span className="font-css top"></span>
            <div className="inputPic">
            <input type="file" id="file-input" name="ImageStyle"/>
            <select value="Cat breed">
            <option value="Orange">Maine coon</option>
            <option value="Radish">British shorthair</option>
            <option value="Cherry">Sphynx</option>
            <option value="Cherry">Fat & ugly</option>
            <option value="Cherry">Norwegian forest cat</option> 
            </select>
            </div>
            <div classname="description">
                <input type="text" id="textDescription" name="fname" 
                value ="Look at my sweet baby! #SweetOneteen #BirthdayBoy" />
                
            </div>
            <button class="button">Upload</button>
</div>

        </div>
        </div>
    )
}

export default Upload