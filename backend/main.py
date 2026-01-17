from fastapi import FastAPI
from pydantic import BaseModel
from langgraph_agent import app_graph

app = FastAPI()

class Interaction(BaseModel):
    message: str

@app.post("/log-interaction")
def log_interaction(data: Interaction):
    result = app_graph.invoke({"input": data.message})
    return {"reply": result["output"]}
