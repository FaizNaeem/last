import details from '@/lib/detalis'
import React from 'react'
import './details.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export async function generateMetadata({ params }){
  const meta = await details(params.id)
  return{
    title : meta.category,
    description : meta.description,
  }
}
export default async function Id({params}) {
    const detail = await details(params.id)
    console.log(detail);
  return (
    <>
        
    <div className="hl">
    <div className="card p-4" style={{width: "20rem;" }}>
      
  <img src={`${detail.image}`}  style={{width:"10rem"}} className="card-img-top p-3" alt="..."/>
       
  <div className="card-body">
    <h5 class="card-title">Title: {detail.title}</h5>
    <p class="card-text"> Price : {detail.price}</p>
    <h5 class="card-title">Category: {detail.category}</h5>
    <button href="#" className="bg-gray-500 p-2 text-white flex items-center justify-center w-full text-center"  >Purchase Now</button>
  </div>
</div>
 
    </div>
      
  {/* <Users/> */}
    </>
  )
}
