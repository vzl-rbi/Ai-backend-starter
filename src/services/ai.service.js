// import openai from "../config/openai.js";

// export const generateChatResponse = async (message) => {
//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: message },
//     ],
//   });

//   return response.choices[0].message.content;
// };
import axios from "axios";

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

export const generateChatResponse = async (message) => {
  const response = await axios.post(
    "https://api-inference.huggingface.co/models/google/flan-t5-base",
    {
      inputs: message,
    },
    {
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
      },
    },
  );

  return response.data[0]?.generated_text || "No response";
};
