import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FaStar } from 'react-icons/fa';
  const supabase = createClient("https://cchjgnarmroqsykaicgb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaGpnbmFybXJvcXN5a2FpY2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MzAyOTAsImV4cCI6MjAwNDUwNjI5MH0.sOwZQRnz3cu6RB0mInFP7qII0R-IFMWLOeP2YP73ne0");

  function App() { // this is just basic pull from the database
    const [books, setBookInfo] = useState([]);

    useEffect(() => {
      getBookInfo();
    }, []);

    async function getBookInfo() {
      const { data } = await supabase.from("books").select();
      setBookInfo(data);

    }

    return (
<div>
  {books.map((book) => (
    <div key={book.name} className="w-full h-full bg-secondary flex p-2 rounded-xl text-secondary">
      <div className="w-full h-full bg-altSecondary flex p-1 rounded-xl ite relative">
        <div className="flex flex-col">
          <ul className="p-2">
            <li className="flex items-start">
              <div className="border-solid lg:border-6 md:border-4 border-2 border-secondary rounded-xl">
                <img src={book.cover} alt="Book Cover" className="m-0 rounded lg:h-64 md:h-48 sm:h-32 sm:w-24w-auto flex-row" />
              </div>
              <div className="ml-4 flex flex-col font-serif antialiased">
                <span alt="title" className="lg:text-3xl md:text-2xl sm:text-xl font-semibold super-antialiased">{book.name}</span>
                
                <span alt="author" className="block lg:text-xl md:text-lg text-base font-thin">{book.author}</span>

                <div className="lg:text-base md:text-sm text-xs">
                  <span alt="age-rating">Age Rating <div className="align-text-bottom toolTip">&#63;
                    <span className="toolTipText">Not our reccommended age rating, but where the publisher put it at</span>
                  </div>: {book.age_rating}</span>

                  <span alt="genre" className="block">Genre: {book.genre ? book.genre.split(' ').join(', ') : ''}</span>
                  <span alt="reviewer" className="block">Reviewer: {book.reviewer}</span>
                  <span alt="tags" className="block">Tags: {book.tags ? book.tags.split(' ').join(', ') : ''}</span>
                </div>
              </div>
              <div className="absolute top-10 right-10 bg-primary rounded-lg lg:text-base md:text-xs text-xs items-center p-3 sm:flex hidden">
                <FaStar className="text-yellow-500 lg:text-3xl md:text-2xl text-xl pr-2" />
                <div className="text-center border-r-2 px-2 lg:mr-4 md:pr-3 sm: mr-3">
                  <span className="font-bold underline">Our Rating <div className="align-text-bottom toolTip">&#63;
                  <span className="toolTipText">How we rate</span></div></span>
                  <span className="block text-xl">{book.rating} / 5</span>
                </div>
                <div className="text-center">
                  <span className="font-bold underline">Reader Rating</span>
                  <span className="block text-xl">{book.rating} / 5</span>
                </div>
              </div>
            </li>
            <li className="mt-4">
              <span alt="review" className="block overflow-wrap break-word lg:text-base md:text-sm text-xs">
                {book.review.substring(0, 300)}
                {book.review.length > 300 && <span className="text-primary text-sm">... Continue</span>// make this into a react button
                }
              </span>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  ))}
</div>


    
    

    
    );
  }

  export default App;