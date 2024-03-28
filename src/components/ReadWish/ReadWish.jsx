import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ReadWish = () => {
    // return (
    //     <div>
    //         <div>
    //             <h1 className="text-5xl text-center mt-20 border h-28 flex items-center justify-center bg-gray-200 rounded-xl"> Total Book Add:</h1>


    //             {/* dropdown */}
    //             <div className="flex items-center justify-center mt-10">
    //                 <details className="dropdown ">
    //                     <summary className="m-1 btn bg-green-500 w-44 text-xl text-white">Sort By <FaAngleDown /></summary>
    //                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    //                         <li><a>Item </a></li>
    //                         <li><a>Item 2</a></li>
    //                     </ul>
    //                 </details>
    //             </div>




    //             {/* Tabs */}




    //             <div>


    //                 <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-400">
    //                     <Link to="" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400 text-gray-400">
    //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    //                             <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    //                         </svg>
    //                         <span>Architecto</span>
    //                     </Link>
    //                     <Link to={`wishlist`} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg border-gray-400 text-gray-50">
    //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    //                             <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    //                             <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    //                         </svg>
    //                         <span className="text-black">Corrupti</span>
    //                     </Link>

    //                 </div>




    //                 <div><Outlet></Outlet></div>
    //             </div>


    //             {/* 
    //         <div className="mt-10">

    //             {
    //                 listedBook.map(B => <BookList key={B.id} B={B} ></BookList>)
    //             }

    //         </div> */}

    //         </div>

    //     </div>
    // );
  const [tabIndex, setTabIndex] =useState(0);

    return (
        <div className="">
            <div className="hero lg:w-[1200px] mx-auto  bg-base-200 mt-5 rounded-3xl p-4">
                <button className=" w-full h-16 items-center text-3xl font-bold">Book</button>
            </div>
            <div className="px-5 mt-5">
                <div className="flex max-w-7xl mx-auto lg:items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">


                    <Link
                        to=""
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>



                    <Link
                        to={`wishlist`}
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center border-l flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>WishList Books</span>
                    </Link>

                </div>
                <div className="mt-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>


    );
};

export default ReadWish;