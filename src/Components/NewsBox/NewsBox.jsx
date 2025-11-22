import React, { useEffect, useState } from "react";
import "./NewsBox.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsBox = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("articles", data.articles);
        setArticles(data.articles);
      });
  }, [category]);

  return (
    <div className="newsBox">
      <h2>Latest News</h2>
      <div className="newsGrid">
        {articles.length > 0 ? (
          articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                imgSrc={news.urlToImage}
                url={news.url}
              />
            );
          })
        ) : (
          <p className="text-center fw-bold justify-content-center align-items-center w-100 flex">
            <b>Loading news...</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsBox;
