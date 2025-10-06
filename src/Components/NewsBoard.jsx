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
    <div>
     <h1 className="text-center" style={{ color: "#00bfff" }}>Welcome to Latest<br/><span className="badge bg-danger">News</span></h1>
     {articles.map((NewsBoard,index)=>{
        return <NewsItem key={index} title={NewsBoard.title} description={NewsBoard.description} src={NewsBoard.urlToImage} url={NewsBoard.url} />

     })}
    </div>
  )
}

export default NewsBoard
