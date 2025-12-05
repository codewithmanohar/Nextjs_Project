import { connectDB } from "@/lib/mongoose";
import Recipe from "@/models/Recipe";
import User from "@/models/User";


// export async function GET(req,context){
//     try {
//         // To add new field in old data or model 
//         // const res = await Recipe.updateMany({}, {$set : {createdBy: "69281e539ae0dae2e5ee9b66"}});
//         // return Response.json(res).status(200);

//         // const res = await Recipe.find({createdBy: "69281e539ae0dae2e5ee9b66"}); 
//         // return Response.json(res);

//         const page = parseInt(context?.body?.page) || 1 ; 
//         const limit = 6 ; 
//         const skip = (page - 1)*limit; 

//         const recipes = await Recipe.find().skip(skip).limit(limit); 

//         const totalRecipe = await Recipe.countDocuments(); 

//         return Response.json({
//             recipes, 
//             totalPage : Math.ceil(totalRecipe / limit), 
//             currentPage : page 
//         })
        

//     } catch (error) {
//         return Response.json({message: error.message});
//     }
// }

export async function PUT(req,context){
    try {
        connectDB();
        const body = await req.json(); 
        const {id , profile_link , name } = body; 
        console.log(id, name );
        const res = await User.findByIdAndUpdate(id, {
            name,
            image: profile_link
        });
        if(res){
            return Response.json(res);
        }
        return Response.json({message: res?.message});

    } catch (error) {
        return Response.json({message: error.message});
    }
}