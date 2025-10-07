import { useEffect } from "react";
import { useState } from "react";
import NewsItem  from "./NewsItem";


const NewsBoard = ({category}) => {

    const[articles,setArticles]=useState([]);
    useEffect(()=>{
       let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`; 
       fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));

    },[category])
  return (
    <div className="newsboard">
     <h1 className="text-center" style={{ color: "#00bfff",fontSize:"68px",fontWeight:"bold" }}>Welcome to Latest<br/><span className="badge bg-danger">News</span></h1>
     <div className="content-area" style={{color:"black",textAlign:"center",fontSize:"20px",backgroundColor:"red"}}><p className="header" style={{fontWeight:"bold",fontSize:"54px"}}><i>Stay informed with the latest updates from around the world</i></p>anytime, anywhere. From breaking headlines to trending stories, NewsNow brings you fast, reliable, and personalized news that matters most to you.</div>
     {articles.map((NewsBoard,index)=>{
        return <NewsItem key={index} title={NewsBoard.title} description={NewsBoard.description} src={NewsBoard.urlToImage} url={NewsBoard.url} />

     })}
    </div>
  )
}

export default NewsBoard
