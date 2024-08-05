export const getCollections = async () => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections?timestamp=${new Date().getTime()}`, {
     method: 'GET',
     headers: {
       'Cache-Control': 'no-cache',
       'Pragma': 'no-cache',
       'Expires': '0',
     },
   });
 
   if (!response.ok) {
     console.error('Failed to fetch collections:', response.status, response.statusText);
     throw new Error('Failed to fetch collections');
   }
 
   return await response.json();
 };
export const getProducts = async () => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?timestamp=${new Date().getTime()}`, {
     method: 'GET',
     headers: {
       'Cache-Control': 'no-cache',
       'Pragma': 'no-cache',
       'Expires': '0',
     },
   });
 
   if (!response.ok) {
     console.error('Failed to fetch products:', response.status, response.statusText);
     throw new Error('Failed to fetch products');
   }
 
   return await response.json();
 };
 