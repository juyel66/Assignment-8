import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Book = ({book}) => {
    // const bookDetails = useLoaderData()



    const {bookName,author,image,id,category, rating,tags} =  book;
    return (

        <Link to={`/bookDetails/${id}`}>
        <div className=" m-4">

            {/* <Link to="/bookDetails"> */}
            
            <div className="card border-4 lg:w-[380px] w-full hover:border-green-500  hover:bg-gray-200 mt-10 h-[600px] card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[300px] object-cover  p-16" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex text-green-500 gap-16">
    <h2 className="text-xl"> {tags[0]}</h2>
    <h2 className="text-xl"> {tags[1]}</h2>
    </div>
   <div>
   <p className="text-3xl font-bold">{bookName}</p>
    <p className="text-2xl  mt-5 mb-6">By: <span>{author}</span></p>
   </div>
   <hr className="border-dotted  border-3xl border-green-600" />
    <div className="flex mt-5 justify-between">
        <div>
            <h1 className="text-2xl">{category}</h1>
        </div>
        <div className="flex items-center gap-2">
            <h1 className="text-2xl">{rating}</h1>
            <h1 className="text-2xl"><FaRegStar></FaRegStar></h1>
            
        </div>

      
    </div>
  </div>
</div>
            
           



            
        </div>
        </Link>
    );
};

export default Book;