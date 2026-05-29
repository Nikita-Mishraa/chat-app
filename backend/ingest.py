import chromadb
import requests
# from sentence_transformers import SentenceTransformer

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_or_create_collection("documents")

# model = SentenceTransformer("all-MiniLM-L6-v2")

with open("./data/notes.txt", "r", encoding="utf-8") as file:
    text = file.read()

# embedding = model.encode(text).tolist()

response = requests.post(
    "http://localhost:11434/api/embed",
    json={
        "model": "nomic-embed-text",
        "input": [text]
    }
)

data = response.json()

embedding = data["embeddings"][0]

collection.add(
    documents=[text],
    embeddings=[embedding],
    ids=["doc1"]
)

print("Documents added successfully")