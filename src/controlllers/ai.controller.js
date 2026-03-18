import { generateChatResponse } from "../services/ai.service.js";

const chatController = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await generateChatResponse(message);

    res.json({ reply });
  } catch (error) {
    next(error);
  }
};

export default chatController;
