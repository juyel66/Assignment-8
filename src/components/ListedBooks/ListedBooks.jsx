import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoreBookApplication } from "../../utility/localStorage";
import BookList from "../BookList/BookList";
import { FaAngleDown } from "react-icons/fa6";


const ListedBooks = () => {
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

    const [tabIndex, setTabIndex] = useState(0)

    // console.log(listedBook)
    return (
        <div>
            <h1 className="text-5xl text-center mt-20 border h-28 flex items-center justify-center bg-gray-200 rounded-xl"> Total Book Add: {listedBook.length}</h1>


            {/* dropdown */}
            <div className="flex items-center justify-center mt-10">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-green-500 w-44 text-xl text-white">Sort By <FaAngleDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                    </ul>
                </details>
            </div>




            {/* Tabs */}




            <div>
                <div className="flex max-w-7xl mt-20  mx-auto lg:items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">


                    <Link 
                        
                        onClick={() => setTabIndex(0)}
                        className={`flex  items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border-4 border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="">Read Books</span>
                    </Link>



                    <Link
                       
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center border-3 flex-shrink-10 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-4 border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>WishList Books</span>
                    </Link>

                </div>
            </div>



            <div className="mt-10">

                {
                    listedBook.map(B => <BookList key={B.id} B={B} ></BookList>)
                }

            </div>

        </div>
    );
};

export default ListedBooks;