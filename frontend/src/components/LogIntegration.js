import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setResponse } from "../store";

export default function LogInteraction() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:8000/log-interaction", {
      message
    });
    dispatch(setResponse(res.data.reply));
  };

  return (
    <div>
      <h2>Log HCP Interaction</h2>
      <textarea
        placeholder="Describe interaction or chat with AI..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Submit</button>
    </div>
  );
}
