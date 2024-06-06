import React from 'react';
import list from '../../public/list.json';
import Cards from './Cards'; // Import the Cards component
import { Link } from 'react-router-dom';
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
       <div className='mt-28 text-center'>
        <h1 className="text-2xl font-bold md:text-4xl  ">
          We are Delighted to have you <span className="text-pink-800">here !!!!</span>.
        </h1>
        <p className="text-xl font-semibold mt-3 ">
          "Welcome to our book app, your gateway to a world of imagination and discovery. Dive into captivating stories, explore new perspectives, and broaden your horizons with just a swipe. Whether you crave thrilling adventures or moments of quiet reflection, our app offers a diverse collection of books to satisfy every reader. Start exploring today and let the magic of reading transport you to extraordinary places."
        </p>
       <Link to='/'>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Back
        </button>
       </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"> {/* Add gap between cards */}
          {list.map((item) => (
            <div key={item.id} className="mb-4"> {/* Add margin bottom to each card */}
              <Cards item={item} />
            </div>
          ))}
        </div>
       </div>
      </div>
    </>
  );
}

export default Course;


