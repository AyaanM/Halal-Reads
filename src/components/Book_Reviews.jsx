import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://cchjgnarmroqsykaicgb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjaGpnbmFybXJvcXN5a2FpY2diIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MzAyOTAsImV4cCI6MjAwNDUwNjI5MH0.sOwZQRnz3cu6RB0mInFP7qII0R-IFMWLOeP2YP73ne0");

  function App() { // this is just basic pull from the database
    const [book_titles, setBookTitles] = useState([]);

    useEffect(() => {
      getBookTitles();
    }, []);

    async function getBookTitles() {
      const { data } = await supabase.from("book_titles").select();
      setBookTitles(data);
    }

    return (
    <div>
        <div className="w-full h-full bg-secondary flex py-4 px-4 rounded-xl text-altSecondary">
          
          <div>
            <ul>
              {book_titles.map((book) => (
                <li key={book.name}>{book.name}</li>
              ))}
            </ul>
          </div>

        </div>
    </div>
    );
  }

  export default App;