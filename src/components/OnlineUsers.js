import "./OnlineUsers.css";
import { useCollection } from "../hooks/useCollection";

import React from "react";
import Avatar from "./Avatar";

export default function OnlineUsers() {
  const { documents, error } = useCollection("users");
  return (
    <div className="user-list">
      <h2> All Users </h2>
      {error && <p className="error">{error}</p>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-user"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
