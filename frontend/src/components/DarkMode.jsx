import React, { useEffect, useState } from 'react'
import { MdDarkMode} from "react-icons/md";
import { CiLight } from "react-icons/ci";

function DarkMode(props) {
const [darkMode,setDarkMode] = useState(true)
const {handleTheme} = props


 
  return (


    <>
        {darkMode  ?
       <div className='dark_mode' onClick={(e)=>{setDarkMode(false),handleTheme(darkMode) }} ><MdDarkMode /></div>
       :
       <div className='light_mode' onClick={(e)=>{setDarkMode(true),handleTheme(darkMode)}} > <CiLight /> </div> }
    </>
  )
}

export default DarkMode
