import React from "react";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Nav from '../../Components/Nav'
import Slider from '../../Components/Slider'
import '../../Styles/PageHome.css'

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <Slider />
      <Content />
    </div>
  )
}