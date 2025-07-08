import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoteData } from '../Redux/notesSlice';
import { IoAdd } from 'react-icons/io5';
import { GrNotes } from "react-icons/gr";
import AddNotes from '../components/AddNotes';
import { Outlet } from 'react-router';

const NotesSection = () => {
   const [showaddnotes, setShowaddnotes] = useState(false);
    const {notes}=useSelector((state)=>state.note);
    const dispatch =useDispatch();
     const userId=localStorage.getItem("userId");
 
    
    useEffect(()=>{
        dispatch(fetchNoteData(userId));
    },[dispatch])
    
  return (
    <div className=' bg-black'>
        <div className='py-5 px-10 justify-between flex shadow-lg shadow-sky-400 '>
             <h1 className='text-3xl text-sky-400 font-bold'>Personal Notebook</h1>
        <button   onClick={()=> setShowaddnotes(true)} className='flex gap-4 rounded-xl bg-sky-400 p-3'>Add New Notes<IoAdd size={25}/></button>
         {
        showaddnotes && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/70 "
              //  onClick={()=> navigate('/home')}
                onClick={()=> setShowaddnotes(false)}
              ></div>
              <div className="absolute z-1000">
                <AddNotes
                 
                 // onClose={()=> navigate('/home')}
                 onClose={()=>setShowaddnotes(false)}
                />
              </div>
            </>
          )
      } <Outlet />
        </div>
     <div className='grid grid-cols-3 gap-10 px-35 py-15'>
{
  notes.map((item,index)=>(
    <div key={index} className='w-[40vh] h-[30vh] rounded-xl bg-sky-300 shadow shadow-sky-300 shadow-t'>
      <div className='flex justify-between bg-black text-sky-400 p-3'> <h1 className='rounded-full bg-sky-300 px-2.5 py-1.5 text-black  font-bold'>{item.id}</h1><p>{new Date(item.inserted_at).toISOString().split("T")[0]}</p></div>
   

<h1 className='font-bold text-xl text-center'>{item.title}</h1>
<p className='m-3 '>{item.description}</p>
    </div>
  ))
}
     </div>
      
    </div>
  )
}

export default NotesSection
