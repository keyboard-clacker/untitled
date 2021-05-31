import React from "react"
import bigBlob from "./big-blob.png"
import blobOutlineLeft from "./blob-outline-left.png"
import blobOutlineFarLeft from "./blob-outline-far-left.png"
import "./splash.module.css"

const Splash = () => {
  return (
    <div styleName="container">
      <div styleName="big-blob-container">
        <div styleName="big-blob-relative">
          <img styleName="big-blob" src={bigBlob} alt="blob outline" />
          <img
            styleName="blob-outline--left"
            src={blobOutlineLeft}
            alt="big blob"
          />
          <img
            styleName="blob-outline--far-left"
            src={blobOutlineFarLeft}
            alt="big blob"
          />
        </div>
      </div>
      <span styleName="name">UNTITLED</span>
    </div>
  )
}

export default Splash
