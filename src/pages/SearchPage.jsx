import React from 'react'
import '../styling/SearchPage.css'
import Search from '../images/Buttons/Search.png'

export default function SearchPage() {
    return (
        <div className="SearchPage">
             <input
            type="text"
            placeholder="Search..."
            name="s" 
            
        />
        <img src={Search} className="SearchImage"></img> 
        </div>
    )
}
