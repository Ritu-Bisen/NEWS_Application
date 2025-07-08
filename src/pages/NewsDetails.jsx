
 import React from 'react'
import { useLocation } from 'react-router';

const NewsDetails = () => {
  const location = useLocation();
  const { title, img, des, source, date, url,content } = location.state || {};


  return (
    <div className="p-10 bg-black text-white h-screen w-screen">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <div className='flex justify-between mt-10'>
        <p className='text-2xl font-semibold'>{source?.name} </p>
           <p className='text-gray-400'>{new Date(date).toLocaleString()}</p>
      </div>
      <div className='flex m-10 gap-10'>
        <div className=''>  <img src={img} alt="news" className="w-[130vh] h-140 object-cover my-4 rounded" /></div>
        <div className='w-[150vh]'>  <p className="text-2xl mt-5">{des}</p>
      <p className='text-gray-400 m-5 text-lg mt-5'>{content}</p>
      <a href={url} target="_blank"  className="text-blue-600 underline mt-10 block">Read Full Article</a></div>
      </div>
     {/* <div className='flex flex-col'>
    
      <div>
       
        </div> 
     
      </div> */}
     
    </div>
  )
}

export default NewsDetails
