import { Link } from "react-router-dom";


const LatestCollectionBook = ({latest}) => {
    const {id,image,bookName,review} = latest;
    // const a = {author};
    return (
        <div >
            <div className="hero h-full hover:border-blue-700 hover:bg-gray-300 border-2 rounded-xl border-gray-600 mt-10 flex flex-col-3  bg-base-200">
  <div className="hero-content flex-col  ">
    <img  src={image} className="max-w-sm h-80 w-64  object-cover rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-bold">{bookName}</h1>
      <p className="py-6">{review}</p>
       <div className="">
       <Link><button className="btn w-[340px] rounded-xl bg-green-400 text-white text-xl">Get Started</button></Link>
       </div>
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default LatestCollectionBook;