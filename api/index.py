from fastapi import FastAPI

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.get("/api/list")
def liste():
    return {"liste": ["Apfel", "Banane", "Birne", "Ananas", "Orange"]}