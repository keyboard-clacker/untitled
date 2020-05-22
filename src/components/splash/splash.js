import React, { Fragment } from "react"
import bigBlob from "./big-blob.png"
import blobOutlineLeft from "./blob-outline-left.png"
import blobOutlineFarLeft from "./blob-outline-far-left.png"
import useMounted from "../../utils/useMounted"
import "./splash.module.css"

const Splash = () => {
  const isMounted = useMounted()

  let Wave = Fragment
  if (isMounted) {
    Wave = require("./wave").default
  }

  return (
    <div styleName="container">
      {isMounted ? (
        <>
          <Wave styleName="wave1" />￼
          <Wave styleName="wave2" />￼
          <Wave styleName="wave3" />￼
        </>
      ) : null}
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
      <span styleName="name">Kyle Holzinger</span>
    </div>
  )
}

export default Splash
