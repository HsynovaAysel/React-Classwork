import React from 'react'
import './index.scss'
const PrimaryBtn = ({bgColor,btnText}) => {
  return (
    <button className={bgColor}>{btnText}</button>
  )
}

export default PrimaryBtn