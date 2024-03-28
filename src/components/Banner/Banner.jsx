import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-11">
            <div className="hero lg:h-[350px] w-[100]  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/54YnKYF/pngwing-1.png" className="max-w-sm lg:w-[200px] w-[300px] h-[250px]  rounded-lg" />
    <div>
      <h1 className="lg:text-5xl text-2xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
     <Link to="/listed" > <button className="btn bg-green-500 text-white mt-9 ">View The List</button></Link>

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;