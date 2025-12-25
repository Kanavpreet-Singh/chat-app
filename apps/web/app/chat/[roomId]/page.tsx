"use client";

import { InputBox } from "@repo/ui/inputbox";
import { Button } from "@repo/ui/button";
import { use, useState } from "react";

export default function ChatPage({ params }: { params: Promise<{ roomId: string }> }) {
  const { roomId } = use(params);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Room: {roomId}</h1>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "20px" }}>
        <InputBox 
          placeholder="Type your message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}
