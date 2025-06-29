import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
    // State to manage sidebar extension
    const [extended, setExtended] = useState(false);
    // Accessing context values
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    // Function to load and send a prompt
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                {/* Menu icon to toggle sidebar extension */}
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                {/* New chat button */}
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {/* Display recent prompts if sidebar is extended */}
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} 
                                    className="recent-entry" key={index}>
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}                        
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                {/* Additional sidebar items */}
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;