

import { useEffect, useState } from "react";
import { getStoreBookApplication } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadListData from "../ReadListData/ReadListData";


const ReadLIst = () => {


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
            <h1 className="text-5xl">Read List: {listedBook.length} </h1>
            
            {
                listedBook.map(b=><ReadListData b={b}></ReadListData>)
            }
            
            
        </div>
    );
};

export default ReadLIst;