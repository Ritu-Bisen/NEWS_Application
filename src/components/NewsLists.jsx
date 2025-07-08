import React, { useEffect, useState } from "react";
import NewsCart from "./NewsCart";

const NewsLists = () => {
const [newslist, setNewslist] = useState([])

const GetNewsData=async()=>{
    try {
        const response = await fetch("https://gnews.io/api/v4/top-headlines?country=in&category=general&apikey=da57029642d9d09a1741c010b26621c9")
        if(!response){
            console.log("data not found");
            
        }
        const data=await response.json();
        console.log(data.articles);
         setNewslist(data.articles)
        return data.articles;
       
    } catch (error) {
         console.log("data not found",error);
    }
}
 
useEffect(()=>{
    GetNewsData();
},[])

  return (
  <div className="bg-black text-white  p-15">
    <h1 className="text-4xl text-center font-bold mt-10">BREAKING NEWS</h1>
    <p className="text-center mt-1">Get real-time headlines from across India – Politics, Entertainment, Technology & more.</p>
    <div className="grid grid-cols-3">
        {
            newslist.map((item,index)=>(
                <div key={index}>
                    <NewsCart title={item.title} content={item.content} img={item.image} des={item.description} source={item.source} date={item.publishedAt} url={item.url}/>
 
                </div>
            ))
        }
    </div>
 </div>
);
};

export default NewsLists;
