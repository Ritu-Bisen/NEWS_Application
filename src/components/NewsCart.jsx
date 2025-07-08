import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Fixed import
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteLikeNewsSlice,
  fetchLikeNewsSlice,
  postLikeNewsSlice
} from '../Redux/likeNewsSlice';

const NewsCart = ({ title, img, des, source, date, url, content }) => {
  const dispatch = useDispatch();
  const user_id = localStorage.getItem("userId");
  const { news } = useSelector((state) => state.likes);

  // Fetch liked news once
  useEffect(() => {
   
      dispatch(fetchLikeNewsSlice(user_id));
    
  }, [dispatch]);

  // Check if this news is already liked
  // const isAlreadyLiked = news.map(
  //   (item) => item.title ===news_title && item.user_id === user_id
  // );

   const [like, setLike] = useState(false);

  // // Sync local like state with Redux
  // useEffect(() => {
  //   setLike(isAlreadyLiked);
  // }, [isAlreadyLiked]);

  const handleToggleLike = () => {
    if (!user_id || !title) return;

    const likeData = {
      title,
      img,
      des,
      source,
      date,
      url,
      content,
      user_id,
    };

    if (like) {
      dispatch(deleteLikeNewsSlice({ title, user_id }));
    } else {
      dispatch(postLikeNewsSlice(likeData));
    }

    setLike(true); // Toggle local state
  };

  return (
    <div className='hover:scale-107 transition-all p-3 m-10 mt-35 relative w-[45vh] h-[55vh] flex-col text-gray-800 flex bg-white rounded border border-gray-100 overflow-hidden'>
      <div className='flex justify-between h-10 '>
        <h1 className='text-lg'>{source?.name || 'Unknown'}</h1>
        <p className='text-sm'>{date?.split("T")[0]}</p> {/* Only date */}
      </div>

      <img
        className='w-[42vh] h-[25vh] mt-3 rounded-lg object-cover'
        src={img}
        alt={title || "news image"}
      />

      <div className='mt-2'>
        <h1 className='text-black text-lg line-clamp-2'>{title}</h1>
        <p className='text-gray-600 text-sm h-10 overflow-hidden'>{des}</p>
      </div>

      <div className='absolute bottom-0 w-[45vh] left-0 flex items-center justify-between text-white bg-black/40'>
        <button
          onClick={handleToggleLike}
          className='px-10 cursor-pointer hover:scale-90'
        >
          {like ? <FcLike size={35} /> : <FaRegHeart size={35} />}
        </button>

        <Link
          to='/home/preview'
          state={{ title, img, des, source, date, url, content }}
        >
          <button className='px-10 cursor-pointer hover:scale-90'>
            <IoEyeSharp size={35} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCart;
