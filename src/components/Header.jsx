import React from 'react'
import img from '../assets/img2.png'
import { FaEarthAmericas } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router';
import NewsLists from './NewsLists';
import { UserAuth } from '../context/AuthContext';
import Carousel from './Carousel';
//import Carousel from './Carousel';

const Header = () => {
  // const {session,signOut}=UserAuth();
  // const navigate =useNavigate();
const location =useLocation();

    const items=[
        {
            id:1,
            name:"Home",
            path:'/home'
        },
         {
            id:1,
            name:"Notes",
            path:'/home/notes'
        },
         {
            id:3,
            name:"Likes",
            path:'/home/likes'
        },
         {
            id:4,
            name:"About Us",
            path:'/home/aboutus'
        },
         {
            id:5,
            name:"Sign Out",
            path:'/'
        },
    ]

  return (
    <div className='relative w-full h-150 '>
  < Carousel/>
  {/* <img className='w-full h-150' src={img}/> */}
  <div className='top-1 absolute  m-5 text-white  flex gap-[80vh]'>
    <div className='flex gap-3 text-3xl  font-bold '>
         <h1 className='mt-1'>< FaEarthAmericas/></h1>
 <h1 >NEWS Application</h1>
 </div>
 
  <div className=' gap-10 flex  mt-1'>
    {
        items.map((item,index)=>(
           <div key={index}>
            {item.name==="Sign Out"?(  <div
                onClick={() => {
                  localStorage.removeItem("userId");
                  window.location.href = "/";
                }}
                className=" "
              >
                
                <h1 className='font-semibold text-lg tracking-wider'>{item.name}</h1>
                
            {location.pathname==item.path? <div className='h-1 rounded-full w-text bg-red-500 mx-2'/>:<div/>}
              </div>): (<Link to={item.path} >
            <h1 className='font-semibold text-lg tracking-wider'>{item.name}</h1>
            {location.pathname==item.path? <div className='h-1 rounded-full w-text bg-red-500 mx-2'/>:<div/>}
           
            </Link>)}
           
           </div>
        ))
    }
    
  </div>
  </div>
   
    </div>
  )
}

export default Header

