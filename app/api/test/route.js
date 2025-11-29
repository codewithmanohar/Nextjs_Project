import Recipe from "@/models/Recipe";


export async function GET(req,context){
    try {
        // To add new field in old data or model 
        // const res = await Recipe.updateMany({}, {$set : {createdBy: "69281e539ae0dae2e5ee9b66"}});
        // return Response.json(res).status(200);

        // const res = await Recipe.find({createdBy: "69281e539ae0dae2e5ee9b66"}); 
        // return Response.json(res);

        const page = parseInt(context?.body?.page) || 1 ; 
        const limit = 6 ; 
        const skip = (page - 1)*limit; 

        const recipes = await Recipe.find().skip(skip).limit(limit); 

        const totalRecipe = await Recipe.countDocuments(); 

        return Response.json({
            recipes, 
            totalPage : Math.ceil(totalRecipe / limit), 
            currentPage : page 
        })
        

    } catch (error) {
        return Response.json({message: error.message});
    }
}