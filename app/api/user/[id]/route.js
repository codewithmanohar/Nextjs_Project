import { connectDB } from "@/lib/mongoose";
import User from "@/models/User";

export async function PUT(req, context) {
  try {
    await connectDB();

    // Get user ID from dynamic route
    const { id } = await context.params;

    // Get data from body
    const body = await req.json();
    const { profile_link, name } = body;

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        image: profile_link,
      },
      { new: true } // return updated document
    );

    if (!updatedUser) {
      return Response.json({ message: "User not found" });
    }

    return Response.json(updatedUser);

  } catch (error) {
    return Response.json({ message: error.message });
  }
}
