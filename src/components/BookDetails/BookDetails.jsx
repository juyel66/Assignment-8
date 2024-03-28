import { useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookApplication } from "../../utility/localStorage";
import _debounce from 'lodash/debounce';
// import { data } from 'autoprefixer';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const book = books.find(book => book.id === idInt);
    const [readAdded, setReadAdded] = useState(false);
    const [wishlistAdded, setWishlistAdded] = useState(false); 
    const [processing, setProcessing] = useState(false); 
    const debouncedHandleApplyBook = _debounce(handleApplyBook, 500);

    function handleApplyBook(type) {
        if (!processing) {
            setProcessing(true);
            if (type === 'Read') {
                if (!readAdded) {
     
                    saveBookApplication(idInt);              
                    setReadAdded(true);
                    toast.success('Book Added to Read list');
                } else {
                    toast.warning('You have already Read this book');
                }
            } else if (type === 'Wishlist' && !wishlistAdded && !readAdded) {
                saveBookApplication(idInt);    
                setWishlistAdded(true);
                toast.success('Book Added to Wishlist');
                if (setWishlistAdded(true))
                    toast.warning('already added wishlist')
                else if (setWishlistAdded(false)) {
                    toast('already added wishlist')
                }
            } else if (type === 'Wishlist' && !wishlistAdded && readAdded) {
                toast.warn('Book already added');
                
                
            }
            setProcessing(false); 
        }
    }
    // console.log(data)

    return (
        <div>
            <section className=" ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex  border-2 rounded-xl border-gray-400 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[950px] lg:w-[600px] shadow-xl bg-gray-200 xl:h-112 2xl:h-128">
                        <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col border-2 rounded-xl  border-gray-300 p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl"> <h1 className="text-4xl font-bold ">{book.bookName}</h1>
                        </h1>
                        <p className="mt-4  text-lg sm:mb-12"> <h1>By :{book.author}</h1>
                        </p>

                        <hr />

                        <h1 className="mt-5 mb-4">Fiction</h1>
                        <hr />

                        <div className="mt-5">
                            <br className="hidden  md:inline lg:hidden" /> <span className="font-bold">Review:</span> {book.review}
                        </div>
                        <div className="text-xl mt-4 mb-4 font-bold">
                            <div className="flex gap-16">
                                <p>
                                    Tag
                                </p>
                                <p className="text-green-500">
                                    #{book.tags[0]}
                                </p>
                                <p className="text-green-500">
                                    #{book.tags[1]}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="text-xl space-y-3 pr-5 mt-8 mb-8">
                            <div className="flex justify-between ">
                                <h1>Number of pages:</h1>
                                <h1 className="font-bold">{book.totalPages}</h1>
                            </div>
                            <div className="flex justify-between ">
                                <h1>Publisher:</h1>
                                <h1 className="font-bold">{book.publisher}</h1>
                            </div>
                            <div className="flex justify-between ">
                                <h1>Year of Publishing:</h1>
                                <h1 className="font-bold">{book.yearOfPublishing}</h1>
                            </div>
                            <div className="flex justify-between ">
                                <h1>Rating:</h1>
                                <h1 className="font-bold">{book.rating}</h1>
                            </div>
                        </div>
                        <div className="space-x-6">
                   
                            <button disabled={processing} onClick={() => debouncedHandleApplyBook('Read')} className="btn bg-white border-gray-400 w-28 text-xl h-14"> Read</button>
                  
                            <button disabled={processing} onClick={() => debouncedHandleApplyBook('Wishlist')} className="btn bg-[#50B1C9] text-xl w-32 text-white h-14"> Wishlist</button>
                        </div>
                    </div>
                </div>
                <ToastContainer className="text-2xl" />
            </section>
        </div>
    );
};

export default BookDetails;
