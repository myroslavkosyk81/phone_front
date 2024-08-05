import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product } : {product: ProductType}) => {
  return (
    <Link href={`/products/${product._id}`}>
      <Image src={product.media[0]} alt='product' width={250} height={300} className=' h-[250] rounded-lg object-cover' />
      <div>
         <p className=' text-base-bold'>{product.title}</p>
         <p className=' text-base-bold text-grey-1'>{product.category}</p>
      </div>
      <div>
         <p>${product.price}</p>
         <button>
            <Heart />
         </button>
      </div>
    </Link>
  )
}

export default ProductCard