import React, { useState } from 'react'
import Header from '../components/Header'
import NewsLists from '../components/NewsLists'
import { IoAdd } from "react-icons/io5";
import AddNotes from '../components/AddNotes';
import { Outlet, useNavigate } from 'react-router';

//import AddNotes from './AddNotes';

const HomePage = () => {
  const [showaddnotes, setShowaddnotes] = useState(false);
 // const navigate = useNavigate();
  
  return (
    <div>
      <Header/>
      <NewsLists/>
      <button 
     // onClick={()=> navigate('/home/addnotes')}
      onClick={()=> setShowaddnotes(true)}
       className='fixed rounded-full bg-amber-400 bottom-15 right-15 p-2 cursor-pointer hover:scale-120'><IoAdd size={25}/></button>
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
  )
}

export default HomePage
