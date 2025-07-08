import supabase from "../SupaBaseClient"

export const postLikeNewsApi=async(likeData)=>{
    try {
        const{data,error}=await supabase
        .from("like_news")
        .insert([{
            user_id:likeData.user_id,
            news_title:likeData.title,
            news_description:likeData.des,
            news_content:likeData.content,
            image_url:likeData.img,
            source_name:likeData.source.name,
            source_url:likeData.url,
            publishe_date:likeData.date,

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

export const deleteLikeNewsApi = async (id) => {
  try {
    const { data, error } = await supabase
      .from("like_news")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("Error deleting data", error);
      throw error;
    }

    console.log("Delete successful", data);
    return data;
  } catch (error) {
    console.log("Delete failed", error);
    throw error;
  }
};

export const fetchLikeNewsApi=async(user_id)=>{
    try {
        const{data,error}=await supabase
        .from("like_news")
        .select("*")
        .eq("user_id",user_id)
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
