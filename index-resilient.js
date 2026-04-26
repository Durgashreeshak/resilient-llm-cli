import dotenv from "dotenv";
dotenv.config();
import { ResilientLLM, ProviderRegistry } from "resilient-llm";

// Provider 1 - Primary
ProviderRegistry.configure("openrouter", {
  apiKey: process.env.OPENROUTER_API_KEY,
  chatApiUrl: "https://openrouter.ai/api/v1/chat/completions",
  compatibleWith: "openai"
});

// Provider 2 - Fallback
ProviderRegistry.configure("openrouter-fallback", {
  apiKey: process.env.OPENROUTER_API_KEY,
  chatApiUrl: "https://openrouter.ai/api/v1/chat/completions",
  compatibleWith: "openai"
});

const llm = new ResilientLLM({
  aiService: "openrouter",
  fallback: ["openrouter-fallback"],
  model: "openai/gpt-3.5-turbo",
  maxTokens: 1024,
  temperature: 0.7,
  retries: 3,
  backoffFactor: 2,
  rateLimitConfig: {
    requestsPerMinute: 60,
    llmTokensPerMinute: 90000
  }
});


const { content, metadata } = await llm.chat(
  [
    { role: "user", content: "Add 2 and 3 and respond ONLY with JSON having sum and steps" }
  ],
  { responseFormat: { type: "json_object" } } 
);

console.log("JSON Response:", content);        
console.log("Provider used:", metadata.service.final);
