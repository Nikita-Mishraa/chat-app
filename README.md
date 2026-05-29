# Local RAG Pipeline with Ollama + FastAPI + React

A minimal local Retrieval-Augmented Generation (RAG) application using React, FastAPI, Ollama, and ChromaDB.

This project demonstrates how to build a fully local AI pipeline with:

- Local LLM inference
- Local embeddings
- Vector search
- React frontend
- FastAPI backend

No paid APIs required.

---

## Tech Stack

- React + Vite
- FastAPI
- Ollama
- ChromaDB
- Axios

---

## Features

- Fully local RAG pipeline
- Offline after model download
- FastAPI REST API
- React chat interface
- Free vector database
- Lightweight and beginner-friendly

---

## Project Structure

```txt
rag-app/
│
├── backend/
│   ├── app.py
│   ├── rag.py
│   ├── requirements.txt
│   ├── chroma_db/
│   └── data/
│       └── sample.txt
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── api.js
    │   └── main.jsx
    └── package.json
```

---

# Installation

## 1. Install Ollama

Download Ollama:

https://ollama.com/download

---

## 2. Pull Models

```bash
ollama pull phi3:mini
ollama pull nomic-embed-text
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## requirements.txt

```txt
fastapi
uvicorn
chromadb
ollama
python-multipart
```

---

# Run Backend

Start Ollama:

```bash
ollama serve
```

Run FastAPI server:

```bash
uvicorn app:app --reload
```

Backend URL:

```txt
http://127.0.0.1:8000
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
npm install axios
```

---

# Run Frontend

```bash
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

---

# How It Works

1. User asks a question from React frontend
2. Axios sends request to FastAPI
3. Backend creates embeddings using Ollama
4. ChromaDB retrieves relevant context
5. Ollama generates final response
6. Response is shown in frontend

---

# API Endpoint

## POST `/ask`

### Request

```json
{
  "question": "What is FastAPI?"
}
```

### Response

```json
{
  "answer": "FastAPI is a modern Python backend framework."
}
```

---

# Sample Questions

```txt
What is React used for?
```

```txt
What does Ollama do?
```

```txt
What is FastAPI?
```

---

# Future Improvements

- PDF uploads
- Multiple document support
- Streaming responses
- Chat history
- Authentication
- Docker support
- LangChain integration
- Markdown rendering
- Source citations

---

# Common Issues

## CORS Error

Make sure FastAPI includes:

```python
from fastapi.middleware.cors import CORSMiddleware
```

and:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Ollama Not Running

Run:

```bash
ollama serve
```

before starting FastAPI.

---

# Resources

- Ollama: https://ollama.com
- FastAPI: https://fastapi.tiangolo.com
- ChromaDB: https://docs.trychroma.com
- React: https://react.dev

---

# License

MIT License
