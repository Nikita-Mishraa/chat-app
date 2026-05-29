from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from rag import retrieve_context
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Prompt(BaseModel):
    message: str

@app.post("/chat")
def chat(prompt: Prompt):

    context = retrieve_context(prompt.message)

    final_prompt = f"""
    Use the context below to answer the question.

    Context:
    {context}

    Question:
    {prompt.message}
    """

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "phi3",
            "prompt": final_prompt,
            "stream": False
        }
    )

    data = response.json()

    return {
        "response": data["response"]
    }