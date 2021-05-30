import React, { Fragment } from "react"
import bigBlob from "./big-blob.png"
import blobOutlineLeft from "./blob-outline-left.png"
import blobOutlineFarLeft from "./blob-outline-far-left.png"
import useMounted from "../../utils/useMounted"
import "./splash.module.css"

const Splash = () => {
  const isMounted = useMounted()

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
