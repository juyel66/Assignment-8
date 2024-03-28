import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div className="lg:w-[1200px] w-full mx-auto">
            <Navbar></Navbar>
            </div>


            <div className=" lg:w-[1200px] w-full mx-auto">
                <Outlet></Outlet>
            </div>
            
            
            
        </div>
    );
};

export default Root;