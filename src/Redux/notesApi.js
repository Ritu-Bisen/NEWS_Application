import supabase from "../SupaBaseClient"

export const postNotesApi=async({title,desc,userId})=>{
    try {
        const{data,error}=await supabase
        .from("notes_section")
        .insert([{
            user_id:userId,
           title:title,
            description:desc
        }])
    if (!error) {
        console.log("Post successful", data);
      } else {
        console.log("Error when posting data", error);
      }
  
      return data;
    } catch (error) {
      console.log("Data not posted", error);
    }
}


export const fetchNotesApi=async(userId)=>{
    try {
        const{data,error}=await supabase
        .from("notes_section")
        .select("*")
        .eq("user_id",userId)
    if (!error) {
        console.log("fetch successful", data);
      } else {
        console.log("Error when fetching data", error);
      }
  
      return data;
    } catch (error) {
      console.log("Data is not fetch", error);
    }
}



