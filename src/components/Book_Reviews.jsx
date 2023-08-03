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
    <div key={book.name} className="w-full h-full bg-secondary flex p-4 rounded-xl text-secondary">
      <div className="w-full h-full bg-altSecondary flex p-1 rounded-xl ite relative">
        <div className="flex flex-col">
          <ul className="p-2">
            <li className="flex items-start">
              <div className="border-solid border-8 border-secondary rounded-xl">
                <img src={book.cover} alt="Book Cover" className="m-0 rounded-2xl" />
              </div>
              <div className="ml-4 flex flex-col">
                <span alt="title" className="text-2xl">{book.name}</span>
                <span alt="author" className="block text-xl">{book.author}</span>
                <span alt="age-rating" className="block" 
                title="Not our reccommended age rating, but where the publisher puts it at">Age Rating:  [?] {book.age_rating}</span>
                
                <span alt="genre" className="block">Genre: {book.genre ? book.genre.split(' ').join(', ') : ''}</span>
                <span alt="reviewer" className="block">Reviewer: {book.reviewer}</span>
                <span alt="tags" className="block">Tags: {book.tags ? book.tags.split(' ').join(', ') : ''}</span>
              </div>
              <div className="absolute top-10 right-16 bg-primary rounded-lg p-4">
                <div className="text-center">
                  <span className="text-lg font-bold underline">Rating</span>
                  <span className="block text-3xl">{book.rating}<FaStar className="inline-block text-yellow-500 text-3xl ml-2" /></span>
                </div>
              </div>
            </li>
            <li className="mt-4">
              <span alt="review" className="block overflow-wrap break-word">
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