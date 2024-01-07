'use client'

import axios from 'axios';

export default function Home() {

  const handleAPI = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      // console.log(response.data);
      console.log(`Content: ${response.data[0]?.content}`)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-600/20">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>
     
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button onClick={handleAPI}>Make API Call</button>
      </div>
    </main>
  )
}
