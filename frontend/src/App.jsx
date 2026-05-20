import { useState } from 'react'
import API from "./api";
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const generateAnswer = async () => {
    setAnswer("Loading...")
    const res = await API.post("/chat", {
      message: prompt,
    });

    setAnswer(res.data.response);
  };

  return (
    <>
       <div className="flex flex-col items-center justify-center h-screen gap-5">

      <h1 className="text-5xl font-bold">
        Chat App
      </h1>

      <textarea
        className="border p-3 w-[500px] h-[150px]"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateAnswer}
        className="bg-black text-white px-5 py-2 rounded"
      >
        Generate Answer
      </button>

      <div className="w-[500px] border p-4">
        {answer}
      </div>

    </div>
    </>
  )
}

export default App
