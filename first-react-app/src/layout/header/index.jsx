import React from 'react'
import { VscAccount } from "react-icons/vsc";
import './index.scss'

function Headers() {
  return (
    <header><div className="container">
        <div className="header">
            <div className="logo">
            <VscAccount className='icon'/>
                <h1>Elecrochip</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">SERVICE</a>
                    </li>
                    <li>
                        <a href="#">BLOG</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
            </div></div></header>
  )
}

export default Headers