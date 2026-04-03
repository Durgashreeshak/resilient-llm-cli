const axios = require("axios");

class OpenRouterProvider {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "https://openrouter.ai/api/v1";
  }

  async chat(messages) {
    const response = await axios.post(
      `${this.baseURL}/chat/completions`,
      {
        model: "openai/gpt-3.5-turbo",
        messages: messages
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.choices[0].message.content;
  }
}

module.exports = OpenRouterProvider; 