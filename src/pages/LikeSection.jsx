import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteLikeNewsSlice, fetchLikeNewsSlice } from '../Redux/likeNewsSlice';
import NewsCart from '../components/NewsCart'
import { Link } from 'react-router';
import { IoEyeSharp } from 'react-icons/io5';

const LikeSection = () => {
   const dispatch = useDispatch();
  const user_id = localStorage.getItem("userId");
  const { news } = useSelector((state) => state.likes);

  useEffect(() => {
  dispatch(fetchLikeNewsSlice(user_id))
  }, [dispatch])

  const handleRemove =(id)=>{
    dispatch(deleteLikeNewsSlice(id))
  }
  return (
    <div className='text-white bg-black'>
     <h1 className='text-4xl font-bold p-5 text-center'>❤️ Likes News</h1>
     <p className='text-center'>The Like section displays all the news articles a user has liked, allowing them to revisit stories that match their interests.</p>
      <div className="grid grid-cols-3 gap-10 py-10 px-30">
        {
            news.map((item,index)=>(
                <div className='hover:scale-107 transition-all p-3 m-10 mt-35 relative w-[45vh] h-[55vh] flex-col text-gray-800 flex bg-white rounded border border-gray-100 overflow-hidden' key={index}>
                   
 <div className='absolute top-0 w-[45vh] left-0 flex items-center justify-between text-white bg-black/40'>
        <button
          onClick={()=>handleRemove(item.id)}
          className='px-7 py-2 cursor-pointer hover:scale-90 bg-red-500 font-semibold rounded-lg'
        >
          Remove 
        </button>

        <Link
          to='/home/preview'
          state={{  title: item.news_title,  // Pass item.news_title in state
    img: item.image_url,
    des: item.news_description,
    source: { name: item.source_name },
    date: item.publishe_date,
    url: item.source_url,
    content: item.news_content}}
        >
          <button className='px-10 cursor-pointer hover:scale-90'>
            <IoEyeSharp size={35} />
          </button>
        </Link>
      </div> 
      <img
        className='w-[42vh] h-[25vh] mt-12 rounded-lg object-cover'
        src={item.image_url}
       
      />
       <div className='mt-2'>
        <h1 className='text-black text-lg line-clamp-2'>{item.news_title}</h1>
        <p className='text-gray-600 text-sm h-18 overflow-hidden'>{item.news_description}</p>
      </div>
     <div className='flex justify-between h-10 mt-5'>
        <h1 className='text-lg'>{item.source_name || 'Unknown'}</h1>
        <p className='text-sm'>{item.publishe_date?.split("T")[0]}</p> {/* Only date */}
      </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default LikeSection
