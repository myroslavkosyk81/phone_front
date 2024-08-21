"use client"

import { useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const ProductCard = ({ product } : {product: ProductType}) => {
  const router = useRouter();
  const {user} = useUser();

  const [loading, setLoading] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [liked, setLiked] = useState(false);
  
  const getUser = async () =>{
    try {
      setLoading(true);
      const res = await fetch("/api/users")
      const data = await res.json()
      setSignedInUser(data)
      setLiked(data.wishlist.includes(product._id))
      setLoading(false);
    } catch (error) {
      console.log("[user_GET]", error)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    try {
    if(!user) {
      router.push("/sign-in");
      return;
    }else{
    
      setLoading(true);
      const res = await fetch("/api/users/wishlist", {
        method: "POST",
        body: JSON.stringify({ productId: product._id})
      });
      const updateUser = await res.json();
      setSignedInUser(updateUser)
      setLiked(updateUser.wishlist.includes(product._id))
    }
    } catch (error) {
      console.log("[Wishlist_POST]", error)
    }
    
  }

  return (
    <Link href={`/products/${product._id}`} className=' w-[220px] flex flex-col gap-2'>
      <Image src={product.media[0]} alt='product' width={250} height={300} className=' h-[250] rounded-lg object-cover' />
      <div>
         <p className=' text-base-bold'>{product.title}</p>
         <p className=' text-base-bold text-grey-1'>{product.category}</p>
      </div>
      <div className=' flex justify-between items-center'>
         <p className=' text-body-bold'>${product.price}</p>
         <button onClick={handleLike}>
            <Heart fill={`${liked ? 'red' : 'white'}`} />
         </button>
      </div>
    </Link>
  )
}

export default ProductCard