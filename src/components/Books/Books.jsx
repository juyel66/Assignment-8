import { useEffect, useState } from "react";
import Book from "../Book/Book";




const Books = () => {
    const [books, setBook] = useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
    // console.log(books)


    
    return (
        <div className="mt-10">
           <div>
           <h1 className="text-4xl text-center font-bold">Books: {books.length}</h1>
           </div>

           {/* card */}
           {/* card section  */}

           <div className="grid lg:grid-cols-3 grid-cols-1">

            {
                books.map(book=><Book key={book.id} book={book}></Book>)

            }



           </div>
            
        </div>
    );
};

export default Books;