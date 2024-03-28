import { Link } from "react-router-dom";
import PropType from 'prop-types'; 


const WritersData = ({ w }) => {
    const { name,img,date_of_birth,books } = w;
    return (
        <div>
            <div className="card mt-10 h-[550px] border-2 hover:border-blue-600 border-gray-300 card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64   w-72" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className="text-xl"> Date of birth: {date_of_birth}</p>
                    <p className="font-bold text-xl">Books:</p>
                    <p><li>{books[0]}</li>
                    <li>{books[1]}</li>
                    <li>{books[2]}</li>
                    </p>
                    <div className="card-actions justify-center">
                       <Link to="/"> <button className="btn w-[300px] hover:border-blue-800 bg-green-400 text-xl text-white">View Details</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

// WritersData.propType = {
//     w: PropType.object.isRequired
// }

WritersData.propType ={
    w: PropType.object.isRequired

}
export default WritersData;