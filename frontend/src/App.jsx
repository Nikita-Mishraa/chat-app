import { useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentPrompt = prompt;
    setPrompt("");
    setLoading(true);

    try {
      const res = await API.post("/chat", {
        message: currentPrompt,
      });

      const botMessage = {
        role: "bot",
        text: res.data.response,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Error generating response.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-container">

      <div className="chat-header">
        hiLlama
      </div>

      <div className="chat-messages">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "message user-message"
                : "message bot-message"
            }
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="message bot-message">
            Thinking...
          </div>
        )}

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask something..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && generateAnswer()
          }
        />

        <button onClick={generateAnswer}>
          Send
        </button>

      </div>
    </div>
  );
}

export default App;