# 🚀 Resilient LLM CLI

A **production-inspired resilient LLM system** built using Node.js and OpenRouter.
This project demonstrates how to design fault-tolerant AI systems with retry logic, fallback mechanisms, and multi-provider support.

---

## ✨ Features

* 🔁 Automatic retry handling
* 🔄 Fallback provider support
* ⚡ Rate limit handling
* 🧠 Multi-model support (OpenRouter)
* 💬 Interactive CLI chatbot
* 📊 Response metadata (provider, retries, tokens)

---

## 🛠 Tech Stack

* Node.js
* resilient-llm (library)
* OpenRouter API
* dotenv

---

## 📁 Project Structure

```
RESILIENT-LLM-PROJECT/
│
├── index-resilient.js   # Main application
├── package.json         # Dependencies
├── .env                 # API key (not committed)
└── .gitignore
```

---

## 🔑 Setup Instructions

### 1. Clone repository

```
git clone https://github.com/YOUR_USERNAME/resilient-llm-cli.git
cd resilient-llm-cli
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env` file

```
OPENROUTER_API_KEY=your_api_key_here
```

👉 Get API key from: https://openrouter.ai

---

### 4. Run the project

```
node index-resilient.js
```

---

## 💡 Usage

### Single command:

```
node index-resilient.js "Explain AI"
```

### Interactive mode:

```
node index-resilient.js
```

---

## 🧠 How It Works

1. Sends user input to OpenRouter
2. Uses resilient-llm to manage:

   * Retry logic
   * Rate limiting
   * Fallback provider
3. Returns structured AI response

---

## 🔒 Security

* `.env` file is excluded using `.gitignore`
* API keys are never exposed in code

---

## 🚀 Future Improvements

* Multi-provider routing (OpenAI + OpenRouter)
* Web UI (React / HTML frontend)
* Logging dashboard
* Cost optimization system

---

## 👨‍💻 Author

Your Name

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
