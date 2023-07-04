import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";
function SidebarChat() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      {/* See the video at 1:07:15 for reference... */}
      <Avatar
        src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=John&hair=short01,short02,short03,short04`}
      />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
