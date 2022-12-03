import React from 'react'
import './FeatureImage.css'
function FeatureImage(props) {
  return (
    <div className={`featureImageDiv ${props.show ? "" : "hidden"}`} >
      <img className={props.show ? "addAnimate1" : ""} src={`/slide${props.type}.1.svg`} />
      <img className={props.show ? "addAnimate2" : ""} src={`/slide${props.type}.2.svg`} />
    </div>
  )
}

export default FeatureImage