async function details(id) {
  await new Promise((resolve )=> setTimeout(()=>{
    resolve()
   },3000))
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
  export default details