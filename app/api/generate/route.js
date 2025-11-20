import generateRecipe from "@/lib/gemini";
import genereateImageURL from "@/lib/pexel";
import axios from "axios";

export async function GET(req) {
  // const { dish } = await req.json();

  try {
    // const res = await axios.get("https://api.pexels.com/v1/search", {
    //   headers: {
    //     Authorization: "LgBfLW1O6ly6uDEvfxInFBfHTBKvlhy0osOWTqKuxW65vykkzC7NxBMV"
    //   },
    //   params: {
    //     query: "paneer tikka",
    //     per_page: 1,
        
    //   }
    // });
    const recipe_img = await genereateImageURL("Chicken Butter Masala"); 

    return Response.json({
      url : recipe_img
    });

  } catch (err) {
    return Response.json(err.message);
  }
}

export async function POST(req, res) {
  try {
    // 1. Get the parsed JSON data
    const body = await req.json(); 

    // 2. Destructure the property from the parsed body
    const { selectedIngredients , food_type} = body;
    console.log(selectedIngredients, food_type);

    if (!selectedIngredients) {
      // Check for the specific property 'ingridients' now
      return Response.json({ "message": "ingridients property not found in body" }, { status: 400 });
    }

    const recipe_data = await generateRecipe(food_type, selectedIngredients);
    console.log(recipe_data.dish_name);

    const recipe_img = await genereateImageURL(recipe_data.dish_name);
    console.log("recipe_img :");
    console.log(recipe_img);
    const data = {
      recipe_data , recipe_img
    }
    return Response.json(data);
  } catch (error) {
    // Handle cases where req.json() fails (e.g., bad JSON format)
    console.log("Error in generate route ");
    return Response.json(error.message, { status: 500 });
  }
}