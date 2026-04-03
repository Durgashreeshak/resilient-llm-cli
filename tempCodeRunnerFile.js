require("dotenv").config();

const OpenRouterProvider = require("./providers/openrouter");

const provider = new OpenRouterProvider(process.env.OPENROUTER_API_KEY);

(async () => {
  try {
    const response = await provider.chat([
      { role: "user", content: "Hello, how are you?" }
    ]);

    console.log("Response:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();