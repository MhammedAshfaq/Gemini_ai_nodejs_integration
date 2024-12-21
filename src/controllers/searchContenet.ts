import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

export const searchContentGimini = async (req: Request, res: Response) => {
  try {
    const API_KEY: any =
      req.headers.api_key || process.env.GOOGLE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(req.body.text);
    console.log(result);

    res.status(200).json({
      // message: result.response.candidates[0].content.parts[0].text
      message: result.response.candidates
        ? result.response.candidates[0].content.parts[0].text
        : "Try Again",
      success: true,
    });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while generating content",
    });
  }
};
