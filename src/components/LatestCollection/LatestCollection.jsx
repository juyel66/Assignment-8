


import { useLoaderData } from "react-router-dom";
import LatestCollectionBook from "../LatestCollectionBook/LatestCollectionBook";

const LatestCollection = () => {
    const latestBooks = useLoaderData();
    
    return (
        <div className="mt-10">
            <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item h-72 relative w-full">
    <img src="https://i.ibb.co/vmTFBMQ/360-F-544546950-Xi80k2ppry7rq-KQQYs-SNVmua-AILUiki9.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item h-72 relative w-full">
    <img src="https://i.ibb.co/0qRkP1Y/images.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item h-72 relative w-full">
    <img src="https://i.ibb.co/7pRY8mp/images-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item h-72 relative w-full">
    <img src="https://i.ibb.co/t3VxFVP/images-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>

            <h1 className="text-5xl text-red-600 mt-8 bg-gray-200 h-28 lg:h-16 rounded-xl flex items-center justify-center text-center">All Latest Collection Books: {latestBooks.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {latestBooks.map(latest => (
                    <LatestCollectionBook key={latest.id} latest={latest} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
