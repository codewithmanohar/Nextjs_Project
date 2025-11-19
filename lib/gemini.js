import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config();

// const API_KEY = process.env.GEMINI_KEY;

const ai = new GoogleGenAI({ apiKey: "AIzaSyCwmVpFImvjhxyohq4fU2vBZFDA5ZwSPQo" });

export async function generateRecipe(food_type, selectedIngredients) {
  // 1. Updated systemInstruction to use the desired property names
  const systemInstruction = `
You are a professional chef AI. 
Your job is to generate a recipe based on given ingredients and food type.
You MUST return ONLY a valid JSON object. Do not include any other text, comments, or explanations.
The JSON MUST be enclosed in a code block like this:

\`\`\`json
{
  "dish_name": "...",
  "RECIPE_INGREDIENTS": [
    { "section": "...", "items": ["...", "..."] }
  ],
  "COOKING_INSTRUCTIONS": [
    { "step": 1, "text": "..." }
  ]
}
\`\`\`
  `;

  const prompt = `
Generate a dish using the following:

Food Type: ${food_type}
Ingredients: ${selectedIngredients.join(", ")}

Return structured JSON exactly as instructed.
  `;

  try {
    // NOTE: Replace 'ai.models.generateContent' with your actual function call 
    // to the Gemini API. This is where the model is called.
    const result = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      systemInstruction,
      contents: prompt,
      config: {
        temperature: 0.5,
      },
    });

    const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

    // --- Start of Robust JSON Extraction Logic ---

    if (!responseText || responseText.length === 0) {
      throw new Error("Empty response or no text part from Gemini.");
    }

    // Attempt to extract the content inside the ```json ... ``` block
    const match = responseText.match(/```json\s*([\s\S]*?)```/);

    let jsonContent;

    if (match) {
      // If the block is found, use the content inside the block (match[1])
      jsonContent = match[1].trim();
    } else {
      // If no JSON block is found, throw a specific error, preventing JSON.parse()
      console.error("Gemini did not return JSON in the expected format. Raw response:", responseText);
      throw new Error("Failed to extract JSON from model response. No ```json``` block found.");
    }

    // Parse the extracted JSON content. If the content inside the block is valid, this succeeds.
    const parsed = JSON.parse(jsonContent);
    return parsed;

    // --- End of Robust JSON Extraction Logic ---
    
  } catch (err) {
    console.error("JSON Generation/Parsing Error:", err);
    // Return null or re-throw a simpler error for the calling function
    return null;
  }
}

export default generateRecipe;
