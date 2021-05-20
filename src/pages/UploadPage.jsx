import React from 'react'
import '../styling/UploadPage.css'
import CatPicture from '../images/Buttons/Ted.png'







function Upload() {
    return (
        <div className="Uploadpicture">
            <h1>Upload the best picture of your cat MEOW!</h1>
                <div className='Picture'>
            <a><img src={CatPicture} alt='CatPicture' /></a>
                </div>
            <div className="mb-1">
            <span className="font-css top"></span>
            <div className="">
            <input type="file" id="file-input" name="ImageStyle"/>
         </div>
</div>

        </div>
    )
}

export default Upload