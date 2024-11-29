import { useEffect, useState } from 'react';

export const New = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const requestOptions = {
        method: 'GET',
      };

      const params = {
        api_token: 'VnQOPqRUwMqe7515evQqMyt8v5uyERpyqUaoAoHP',
        countries: 'us',
        language: 'en',
        symbols: 'TSLA,AMZN,MSFT,NVDA,GOOGL,META,AAPL',
        entity_types: 'equity',
        limit: '100',
      };

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&');

      try {
        const response = await fetch(
          `https://api.marketaux.com/v1/news/all?${query}`,
          requestOptions
        );
        if (response.status === 402) {
          throw new Error('Reached Maximum API Calls For The Day');
        }
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-[100%] max-w-6xl bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Get the latest financial and stock market news
        </h1>
        {error ? (
          <div className="flex flex-col items-center">
            <img
              src="https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/3042034/original/crop:x0y0w800h500/hash:1467389078/1357283311_cbt.png?1467389078"
              alt="Come Back Tomorrow"
              className="w-full max-w-md mb-4 rounded-lg shadow-md"
            />
            <div className="text-red-600 text-center text-lg font-semibold">
              {error}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map(article => (
              <div
                key={article.uuid}
                className="p-4 bg-gray-50 shadow-md rounded-lg"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {article.description}
                </p>
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Source:</span>{' '}
                  {article.source}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Published at:</span>{' '}
                  {new Date(article.published_at).toLocaleString()}
                </p>
                <a
                  href={article.url}
                  className="text-green-500 hover:text-green-700 text-sm mt-2 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default New;
