import React from 'react'
// import Header from './components/Header'
// import NewsLists from './components/NewsLists'
import img from './assets/img2.png'
import Header from './components/Header'
import NewsLists from './components/NewsLists'
import { Route, Routes } from 'react-router'
import NewsDetails from './pages/NewsDetails'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'

import { AuthContextProvider } from './context/AuthContext'
import SignUpPage from './pages/SignUpPage'
import PrivateRoute from './components/PrivateRoute'
import AddNotes from './components/AddNotes'
import NotesSection from './pages/NotesSection'
import AboutUs from './pages/AboutUs'
import LikeSection from './pages/LikeSection'

//import AddNotes from '../components/AddNotes';


const App = () => {
  return (
   
      <div className='bg-black h-screen w-screen'>
        
         <AuthContextProvider> 
          <Routes>
           <Route path="/" element={ <SignUpPage />} /> 
            <Route path="/signin" element={ <SignInPage />} />
           
               <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute> } />
       
        <Route path="/home/preview" element={<PrivateRoute><NewsDetails /></PrivateRoute>} />
         <Route path="/home/notes" element={<PrivateRoute><NotesSection /></PrivateRoute>} />
          <Route path="/home/aboutus" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
           <Route path="/home/likes" element={<PrivateRoute><LikeSection /></PrivateRoute>} />
       
           
      </Routes></AuthContextProvider>
       
     </div>
    
     
   
 
  );
}

export default App
