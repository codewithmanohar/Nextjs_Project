import { connectDB } from "@/lib/mongoose";
import Recipe from "@/models/Recipe";

export async function GET(req, context) {
  try {
    await connectDB();

    const {id} = await context.params;
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;  
    const limit = 6 ; 
    const skip = (page - 1)* limit; 

    const recipes = await Recipe.find({createdBy : id})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit); // newest first

    const total = await Recipe.countDocuments({createdBy: id}); 

    

    return Response.json({
      success: true,
      count: recipes.length,
      recipes,
      total, 
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

