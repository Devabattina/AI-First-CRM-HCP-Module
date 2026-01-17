from langgraph.graph import StateGraph
from langchain_groq import ChatGroq

llm = ChatGroq(
    model="gemma2-9b-it",
    api_key="YOUR_GROQ_API_KEY"
)

def ai_node(state):
    response = llm.invoke(state["input"])
    return {"output": response.content}

graph = StateGraph(dict)
graph.add_node("ai_agent", ai_node)
graph.set_entry_point("ai_agent")
graph.set_finish_point("ai_agent")

app_graph = graph.compile()
