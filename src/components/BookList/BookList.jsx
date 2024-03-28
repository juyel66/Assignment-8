import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BookList = ({ B }) => {
    const { bookName, image, author,tags,yearOfPublishing,category, rating, publisher,totalPages} = B;
    return (
        <div>
            <div className="hero border-2 rounded-xl border-gray-300 mt-10 lg:h-[400px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row"> 
                    <img src={image} className=" w-[300px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-6xl text-4xl font-bold">{bookName}</h1> 
                        <p className="py-6 text-3xl">By : {author}</p>
                        <div className=" lg:flex  lg:gap-16 lg:text-2xl">
                            <div className="flex gap-7 text-green-600">
                                <p className="text-black font-bold">Tag</p>
                                <p>#{tags[0]}</p>
                                <p>#{tags[1]}</p>

                            </div>
                            <div className="flex gap-1 items-center">
                                <p> <IoLocationOutline /></p>
                                <p>Year of Publishing: {yearOfPublishing}</p>


                            </div>

                        </div>

                        <div className="flex gap-5  lg:gap-14 mt-8 lg:text-2xl" >
                            <div className="flex items-center gap-1">
                                <p><CgProfile /></p>
                                <p> Publisher: {publisher}</p>

                            </div>
                            <div className="flex items-center gap-1">
                                <p><MdOutlineContactPage /></p>
                                <p>Page : {totalPages}</p>
                            </div>
                        </div>
                        <div className="mt-5 border border-dotted"><hr /></div>

                        <div className="space-x-2 lg:p-4  flex w-[252px] mt-5">
                        <button className="btn lg:text-xl text-blue-800 font-bold bg-blue-300 w-24 lg:w-full h-14 rounded-full">Category: {category}</button>
                        <button className="btn lg:text-xl bg-yellow-200 text-yellow-700  w-24 lg:w-full h-14 rounded-full">Rating: {rating} </button>
                        <button className="btn  bg-green-400 w-24 lg:w-full h-14 rounded-full lg:text-xl text-white">View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookList;