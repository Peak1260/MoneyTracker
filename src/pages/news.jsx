import React, { useEffect, useState } from 'react';
import '../design/styleN.css';

export const New = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      var requestOptions = {
        method: 'GET'
      };

      var params = {
        api_token: 'VnQOPqRUwMqe7515evQqMyt8v5uyERpyqUaoAoHP',
        countries: 'us',
        language: 'en',
        symbols: 'TSLA,AMZN,MSFT,NVDA,GOOGL,META,AAPL',
        entity_types: 'equity',
        limit: '100'
      };

      var esc = encodeURIComponent;
      var query = Object.keys(params)
        .map(function (k) {
          return esc(k) + '=' + esc(params[k]);
        })
        .join('&');

      try {
        const response = await fetch("https://api.marketaux.com/v1/news/all?" + query, requestOptions);
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='page-container'>
      <h1>Get the latest financial and stock market news from top news sources.</h1>
      <div className="news-container">
        {news.map(article => (
          <div key={article.uuid} className="news-article">
            <div className="news-title">{article.title}</div>
            <div className="news-description">{article.description}</div>
            {article.image_url && <img src={article.image_url} alt={article.title} className="news-image" />}
            <div className="news-source">Source: {article.source}</div>
            <div className="news-date">Published at: {new Date(article.published_at).toLocaleString()}</div>
            <a href={article.url} className="news-url" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;