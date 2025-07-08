
import React, { useEffect, useState } from 'react'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import img from '../assets/download.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Carousel = () => {
  const [current,setCurrent] = useState(0);
   const autoplay = true;
   const autoSlideInterval = 2000;

   useEffect(() => {
     if(!autoplay) return
   const SlideInterval = setInterval(nextSlide,autoSlideInterval)
     return () => {
      clearInterval(SlideInterval)
     }
   }, [current,autoplay])
   

   const nextSlide = ()=>{
    setCurrent(current === slides.length -1 ? 0 : current + 1)
   }

   const prevSlide = ()=>{
    setCurrent(current === 0 ? slides.length -1 : current - 1)
   }


   const slides = [
   img,img2,img3,img4
  ];

  return (
    <div className='main flex items-center relative h-150 w-full gap-1'>
     
    <div className=' h-150 w-full '>
    {
        slides.map((item,index)=>(
         current ===index && <img  key={index} src={item} className='h-full w-full object-cover'/>
        ))
     }
    </div>
    <div className='absolute flex justify-between items-center h-150 w-full  '>
      <button className=' py-3 px-2 ' onClick={prevSlide}><FaLessThan size={20}/></button>
      <button className=' py-3 px-2 ' onClick={nextSlide}><FaGreaterThan size={20}/></button>
      
    </div>
    <div className='absolute flex  gap-2 items-center bottom-3  left-1/2'>
      {
        slides.map((_,i)=>(
          <div key={i} className={`items-center flex h-3 w-3 bg-white rounded-full ${current === i ? 'p-2': 'opacity-40'}`}></div>
        ))
      }
    </div>
    </div>
  )
}

export default Carousel
