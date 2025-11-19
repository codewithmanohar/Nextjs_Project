import generateRecipe from "@/lib/gemini";
import axios from "axios";

export async function GET(req) {
  // const { dish } = await req.json();

  try {
    const res = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: "LgBfLW1O6ly6uDEvfxInFBfHTBKvlhy0osOWTqKuxW65vykkzC7NxBMV"
      },
      params: {
        query: "paneer tikka",
        per_page: 1,
        
      }
    });

    return Response.json({
      url: res.data.photos[0]?.src?.large || null
    });

  } catch (err) {
    return Response.json({ url: null });
  }
}

export async function POST(req, res) {
  try {
    // 1. Get the parsed JSON data
    const body = await req.json(); 

    // 2. Destructure the property from the parsed body
    const { selectedIngredients , food_type} = body;

    if (!selectedIngredients) {
      // Check for the specific property 'ingridients' now
      return Response.json({ "message": "ingridients property not found in body" }, { status: 400 });
    }

    const data = await generateRecipe(food_type, selectedIngredients);

    return Response.json(data);
  } catch (error) {
    // Handle cases where req.json() fails (e.g., bad JSON format)
    return Response.json({ "message": "Failed to parse request body" }, { status: 500 });
  }
}