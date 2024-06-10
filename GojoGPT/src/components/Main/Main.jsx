import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>GojoGPT</p>
            <img src={assets.gojo_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hi Silas!</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggesting Nice Places to Go!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Summararize This Concept!</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Discover Team Bonding Activities!</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve Coding Readablility!</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    This is mainly for tests!!!
                </p>
            </div>
        </div>
        </div>
  )
}

export default Main