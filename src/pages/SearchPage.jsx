import React from 'react'
import '../styling/SearchPage.css'
import Search from '../images/Buttons/Search.png'
import Navbar from '../components/Navbar'
import SimpleButton from '../components/Buttons'

export default function SearchPage() {
    return (
<div>
        <Navbar/>
        <SimpleButton/>
        <div className="SearchPage">
                    
            

             <input
            type="text"
            placeholder="Search..."
            name="s" 
            
        />
        <img src={Search} className="SearchImage"></img> 
        </div>
        </div>
    )
}
