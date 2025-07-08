import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { UserAuth } from '../context/AuthContext'

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
      const [error, setError] = useState("")
        const [loading, setLoading] = useState("")
        const {session,signUpNewUser}=UserAuth();
        //console.log(session);

        const handleSignUp=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
          const result =await signUpNewUser(email,password);
          if(result.success){
            navigate("/home");
          }
        } catch (error) {
          setError("an error occurred")
        }
        finally{
          setLoading(false)
        }
        }
        
  return (
    <div className=''>
       <h1 className='text-center text-3xl text-white font-bold'>Welcome to Our News Application</h1>
      <form onSubmit={handleSignUp} className='max-w-sm  m-auto pt-34'>
        <h1 className='font-bold text-white '>Sign Up</h1>
         <p className='mt-3 text-white'>Already have an account? <Link className='text-blue-700 underline' to='/signin'>Sign In</Link></p>
        <div className='flex flex-col py-4' >
<input onChange={(e)=>setEmail(e.target.value)} type='email' className='rounded p-3 mt-6 bg-gray-300' placeholder='Enter email'/>
<input onChange={(e)=>setPassword(e.target.value)} type='password' className='rounded bg-gray-300  p-3 mt-6' placeholder='Enter Password'/>
<button type='submit'disabled={loading} className='font-bold  rounded p-3 mt-6 bg-gray-600' >Sign Up</button>
{
  error && <p className='text-red-600 text-center pt-4'>{error}</p>
}
<input/>
        </div>
      </form>
    
    </div>
  )
}

export default SignUpPage
