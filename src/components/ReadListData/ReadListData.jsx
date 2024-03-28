import { useState } from "react";
import { Link } from "react-router-dom";
import PropType from 'prop-types'; 

const ReadListData = ({b}) => {
    const {bookName} =b;

    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <h1>Name: {bookName}</h1>

            <div>
            <div>
                <div className="flex max-w-7xl mx-auto lg:items-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">


                    <Link
                        
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>



                    <Link
                        
                        onClick={() => setTabIndex(1)}
                        className={`flex items-center border-l flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>WishList Books</span>
                    </Link>

               

                </div>

               
            </div>

            </div>
            
        </div>
    );
};
ReadListData.propType = {
    b: PropType.object.isRequired
}

export default ReadListData;