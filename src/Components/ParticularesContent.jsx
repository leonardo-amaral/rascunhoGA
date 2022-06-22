import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ParticularesBox.css'

export default function ParticularesContent(props) {
  return (
    <div className="ParticularesContent" data-aos="fade-down">
      <Link to={props.link + props.title}>
        <div className="ParticularesBoxItem">
          <img src={props.image} alt="" />
          <h3 className='title-particulares'>{props.title}</h3>
        </div>
      </Link>
    </div>
  )
}