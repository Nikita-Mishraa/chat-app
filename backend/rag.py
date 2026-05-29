import chromadb
import requests

client = chromadb.PersistentClient(path="./chroma_db")

collection = client.get_collection("documents")

def retrieve_context(query):

    response = requests.post(
        "http://localhost:11434/api/embed",
        json={
            "model": "nomic-embed-text",
            "input": [query]
        }
    )

    data = response.json()

    embedding = data["embeddings"][0]

    results = collection.query(
        query_embeddings=[embedding],
        n_results=1
    )

    return results["documents"][0][0]