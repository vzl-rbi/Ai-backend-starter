import openai from "../config/openai.js";

export const generateChatResponse = async (message) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
  });

  return response.choices[0].message.content;
};
