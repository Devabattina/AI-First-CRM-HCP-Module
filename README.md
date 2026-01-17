# AI-First CRM – HCP Interaction Module 

## Overview
This project implements Task 1 of an AI-First Customer Relationship Management (CRM) system, focusing on the Healthcare Professional (HCP) module.  
It provides a Log Interaction Screen that allows field representatives to log HCP interactions using a conversational AI interface.

The system follows an AI-first approach using LangGraph and a Groq Large Language Model to process interaction data intelligently.

---

## Objective
- Design the Log Interaction Screen for HCP interactions
- Enable conversational logging using AI
- Use an AI agent framework (LangGraph)
- Align with life sciences CRM workflows

---

## Tech Stack

### Frontend
- React.js
- Redux Toolkit (state management)
- Axios (API calls)

### Backend
- FastAPI (Python)
- LangGraph (AI agent orchestration)
- Groq LLM – gemma2-9b-it

---

## Project Structure

```
ai-first-crm/
├── frontend/
│   ├── package.json
│   └── src/
│       ├── App.js
│       ├── store.js
│       └── components/
│           └── LogInteraction.js
│
├── backend/
│   ├── main.py
│   ├── langgraph_agent.py
│   └── requirements.txt
│
└── README.md
```

---

## Application Flow
1. Field representative enters HCP interaction details in the frontend
2. React frontend sends data to FastAPI backend
3. Backend invokes a LangGraph-based AI agent
4. Groq LLM (gemma2-9b-it) processes the conversational input
5. AI-generated response is returned to the frontend
6. Redux manages and stores the response state

---

## Log Interaction Screen Features
- Conversational interaction logging
- AI-powered interpretation of HCP discussions
- Easily extensible for summaries, follow-ups, and CRM insights

---

## AI Agent Design (LangGraph)
- LangGraph defines a state-based AI workflow
- User input is passed as state to the AI agent
- The LLM processes the input and returns a structured response
- The design supports future expansion with additional AI nodes

---

## Setup (Optional)

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## Configuration
Add your Groq API key in `langgraph_agent.py`:

```python
api_key="YOUR_GROQ_API_KEY"
```

---

## Task Compliance
- React UI implemented
- Redux used for state management
- FastAPI backend created
- LangGraph AI agent implemented
- Groq LLM (gemma2-9b-it) used
- Conversational HCP interaction logging supported

---

## Author
Anjani Devabattina  
Computer Science Graduate | AI & Data Analytics
