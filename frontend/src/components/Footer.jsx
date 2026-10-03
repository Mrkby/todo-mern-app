import React from 'react'

function Footer(props) {
    const {textCrl} = props
    return (
        <div className='footer'>
            <h4 style={{color:textCrl ?  'black' :" rgb(208, 208, 208)"}}>Your remaining todo : 3</h4>
            <p style={{color:textCrl ? "#3d3d3d" : "#afafaf" }}> "Doing what you love is the cornerstone of having abundance in your life" - Wayne Dyer </p>
        </div>
    )
}

export default Footer
