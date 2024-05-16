/* eslint-disable no-unused-vars */
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  // const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>

          <div className="recent-entry" onClick={() => loadPrompt(item)}>
            <img src={assets.message_icon} alt="" />
            <p>Recent...</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.dark_mode} alt="" />
          <p>Night Mode</p>
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
