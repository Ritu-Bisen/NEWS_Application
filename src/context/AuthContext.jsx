import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../SupaBaseClient";

const AuthContext =createContext()

export const AuthContextProvider =({children})=>{
    const [session, setSession] = useState(null);
const [loading, setLoading] = useState(true); // new

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
    setLoading(false); // ✅ finished loading
  });

  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => listener?.subscription.unsubscribe(); // cleanup
}, []);

    //Sign up
const signUpNewUser = async(email,password)=>{
    const{data,error}=await supabase.auth.signUp({
email:email,
password:password,
    })
if(error){
    console.log("there is problem in sign in",error);
    return{
        success:false,error
    }
  
}
 return {success:true,data}
 }

//sign in
const signInUser =async(email,password)=>{
try {
    const{data,error}=await supabase.auth.signInWithPassword({
        email:email,
        password:password,
    })
     if(error){
        console.log("there  sign in  error ",error); 
        return{success:false,error:error.message};
    }
    console.log("sign-in success:",data);
localStorage.setItem("userId",data.user.id);
    return{success:true,data}
 //   localStorage.setItem("userId",data.user.id)
    
} catch (error) {
    console.log("an error occured",error);
    
}
}

useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
        setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session)=>{
        setSession(session)
    })
},[])

//sign out
const signOut =()=>{
    const {error}=supabase.auth.signOut();
    if(error){
        console.log("there is problem in sign in",error); 
    }
}

 

    return (
       <AuthContext.Provider value={{ session, loading, signUpNewUser, signOut, signInUser }}>

            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth=()=>{
    return useContext(AuthContext);
}