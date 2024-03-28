import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreBookApplication } from "../../utility/localStorage";


const WishList = () => {

    const books = useLoaderData();

    const [listedBook, setListedBook] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoreBookApplication();
        if (books.length > 0) {


            // const bookListed = books.filter(book => storedBookIds.includes(book.id))

            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    bookListed.push(book)
                }
            }

            setListedBook(bookListed);
            console.log(bookListed, books, storedBookIds)
        }
    }, [])
   

   
    return (
        <div>
            <h1 className="text-5xl">Wish list: {listedBook.length} </h1>
            
        </div>
    );
};

export default WishList;