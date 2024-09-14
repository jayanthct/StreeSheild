import React from 'react'
import SmallUploadButton from "../assets/SmallUploadButton.svg";
import "../componentsStyling/CheckYourMediaButton.css";

const CheckYourMediaButton = () => {
  return (
    <button className='CheckYourMediaButton'>
        <img src={SmallUploadButton} alt="" />
        <p>Check Your Media</p>
    </button>
  )
}

export default CheckYourMediaButton
