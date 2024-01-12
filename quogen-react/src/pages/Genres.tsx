import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Genres() {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');
  const { genreName } = useParams();

  useEffect(() => {
    setError('');
    if (genreName) {
      handleAPI(genreName);
    }
  }, [genreName]);

  const handleAPI = async (genre: string) => {
    try {
      const url = `https://api.quotable.io/quotes/random?tags=${encodeURIComponent(genre)}`;
      const response = await axios.get(url);
      console.log('API Response:', response.data); 
  
      if (response.data.length > 0 && response.data[0].content) {
        setQuote(response.data[0].content);
      } else {
        setError('No quote found for this genre.');
        setQuote('');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError('Failed to fetch quote. Please try again.');
    }
  };

  return (
    <main className="flex min-h-screen text-center flex-col items-center justify-between p-32 bg-[url('/paint.jpg')] bg-cover bg-no-repeat text-white">
      <div className="bg-[#b7cedc73] rounded-lg p-24 z-10 max-w-5xl w-full items-center justify-center font-mono text-xl flex text-center backdrop-blur-md">
        {error ? <p>{error}</p> : <h1>{quote}</h1>}
      </div>
      <div className="flex justify-center mb-44 text-center items-center lg:max-w-5xl lg:w-full lg:text-left text-lg ">
        <button onClick={() => genreName && handleAPI(genreName)}>Get other quote</button>
      </div>
    </main>
  );
}
