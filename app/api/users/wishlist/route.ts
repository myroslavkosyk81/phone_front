import User from "@/lib/models/User";
import { connectDb } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST =async (req: NextRequest) => {
   try {
      const { userId } = auth();
      if (!userId) {
         return new NextResponse('Unauthorized', {status: 401})
      }

      await connectDb();

      const user = await User.findOne({clerkId: userId})
      if (!user) {
         return new NextResponse('User not found', {status: 404})
      }

      const {productId} = await req.json()
      if (!productId) {
         return new NextResponse('Product ID is required', {status: 400})
      }

      const isLiked = user.wishlist.includes(productId)
      //dislike
      if (isLiked) {
         user.wishlist = user.wishlist.filter((id:string) => id !== productId)
      } else {
         //like
         user.wishlist.push(productId)
      }
      await user.save()
      return NextResponse.json(user, {status: 200})

   } catch (error) {
      console.log("[wishlist_POST]", error)
      return new NextResponse("Inetrnal server error", {status: 500})
   }
}