import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GrNotes } from "react-icons/gr";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postNotesSlice } from '../Redux/notesSlice';

const AddNotes = ({onClose}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  const userId=localStorage.getItem("userId");
 
 const dispatch =useDispatch();

 const handleClear=()=>{
  setDesc("");
  setTitle("");
 }

  const onhandleSubmit=(e)=>{
    e.preventDefault();
console.log(title,desc,userId);
dispatch(postNotesSlice({title,desc,userId}))
handleClear();


  }
  return (
   <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vh] h-[60vh] bg-white rounded-lg shadow-lg">
      <div className="p-5 bg-gradient-to-l from-blue-300 to-red-300 flex justify-between items-center rounded-t-lg">
          <h1 className='flex font-bold gap-5 text-2xl'><GrNotes size={25}/>Add Notes</h1>
        <button onClick={onClose}><RxCross2 size={25}/></button>
      </div>
      <form className='items-center flex flex-col  max-w-auto px-20 gap-10 py-10'>
        <input className='w-full border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none' type='title'  onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter Title'/>
        <textarea
        
          className="w-full h-50 border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Write your notes here..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button onClick={onhandleSubmit} className='bg-blue-400 py-3 px-10 font-bold text-lg rounded-full text-white' >Add</button>
      </form>
    </div>
  )
}

export default AddNotes
