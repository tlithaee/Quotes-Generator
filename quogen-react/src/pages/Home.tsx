'use client'

import axios from 'axios';
import { useState } from 'react';

export function Home() {
  const [quote, setQuote] = useState('');

  const handleAPI = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      console.log(`Content: ${response.data[0]?.content}`);
      setQuote(response.data[0]?.content);
      // return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <main className="flex min-h-screen text-center flex-col items-center justify-between p-32 bg-[url('/paint.jpg')] bg-cover bg-no-repeat text-white">
        <div className="bg-[#b7cedc73] rounded-lg p-24 z-10 max-w-5xl w-full items-center justify-center font-mono text-xl flex text-center backdrop-blur-md">
          <h1>
            {quote}
          </h1>
        </div>

        <div className="flex justify-center mb-44 text-center items-center lg:max-w-5xl lg:w-full lg:text-left text-lg ">
          <button onClick={handleAPI}>Get other quote</button>
        </div>
      </main>
  )
}
