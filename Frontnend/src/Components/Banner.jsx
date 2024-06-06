import React from "react";
import photu from "../../src/photu.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
        <div className="w-full md:w-l/2  mt-12 md:mt-28 ">
          <div className="space-y-6">
            <h1 className=" text-4xl font-extrabold  ">
              Welcome,We have the best Books{" "}
              <span className=" text-pink-600 ">Meet your best friend</span>
            </h1>
            <p className=" text-2xl">
              Welcome to our Book App! Discover a world of literature at your
              fingertips. Whether you're an avid reader or just starting your
              reading journey, our app offers a vast collection of books to
              explore. From timeless classics to contemporary bestsellers,
              there's something for everyone. Join our vibrant community of book
              lovers and engage in discussions about your favorite books.
              Connect with fellow readers, share book recommendations, and
              participate in book clubs and reading challenges. <br></br>
              <span className="text-purple-400 font-semibold">
                Experience the joy of reading with our Book App. Start your
                literary adventure !{" "}
              </span>
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-active btkn-accent mt-6  ">ENTER</button>
        </div>
        <div className="w-full md:w-l/2 ">
          <img src={photu} className="   mt:32   md:mt-64 " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
