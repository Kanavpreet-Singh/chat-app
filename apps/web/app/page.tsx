"use client";

import { InputBox } from "@repo/ui/inputbox";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      router.push(`/chat/${roomId}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Chat App</h1>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <InputBox 
          placeholder="Type something..." 
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Button onClick={handleJoinRoom}>Join room</Button>
      </div>
    </div>
  );
}
