import { getCollections } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Collections = async () => {
   const collections = await getCollections()
   // console.log(collections)
  return (
    <div>
      <p className=' text-heading1-bold'>Collections</p>
      {!collections || collections.length === 0 ? (
         <p className='text-body-bold'>No collections found</p>
      ) : <div>
         {collections.map((collection: CollectionType) => (
            <Link href={(`/collections/${collection._id}`)} key={collection._id}>
               <Image src={collection.image} alt={collection.title} width={250} height={150} className=' rounded-lg cursor-pointer' />
               <div>{collection.title}</div>
            </Link>
            
         ))}

      </div>}
      
    </div>
  )
}

export default Collections