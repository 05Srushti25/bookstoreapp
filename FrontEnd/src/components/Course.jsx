import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json"
import{Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">
                We are delighted to have you {" "}
                <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p>
            Discover a World of Knowledge and Entertainment!

            At our bookstore, we believe that every book is an investment in your personal growth and imagination. While our collection is paid, each title offers a gateway to endless possibilities — whether you're seeking to expand your knowledge, escape into captivating stories, or explore new ideas. We’ve curated the finest selection of books to ensure every purchase brings immense value, satisfaction, and joy. Your journey towards wisdom, entertainment, and inspiration begins here — because the best stories and knowledge are worth every penny!
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back </button>    
            </Link>        
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4"> 
        {
            list.map((item)=>(<Cards key={item.id} item={item}/>))
        }
        </div>
        
        </div>
        </>
  );
}

export default Course;
