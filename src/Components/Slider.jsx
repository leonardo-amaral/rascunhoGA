import React, { useState } from 'react'
import '../Styles/Slider.css'
import Image1 from '../Assets/images/temp/banner1.jpg'
import Image2 from '../Assets/images/temp/banner2.jpg'
import Image3 from '../Assets/images/temp/banner3.jpg'
import ArrowButton from '../Assets/ArrowButton.svg'
import { useRef } from 'react'

export default function Slider() {

  const Image = useRef()

  function ChangeImage() {
    const Images = [Image1, Image2, Image3]
    const newImage = Image.current.style.backgroundImage = `url(${Images[Math.floor(Math.random() * Images.length)]})`
    return newImage
  }

  return (
    <div className="slide-container" data-aos="fade-down">
      <div ref={Image} className="slide">
        <div className="buttons">
          <img className='arrow-button-left' src={ArrowButton} alt="" onClick={() => ChangeImage()} />
          <img className='arrow-button' src={ArrowButton} alt="" onClick={() => ChangeImage()} />
        </div>
      </div>
    </div>
  )
} 