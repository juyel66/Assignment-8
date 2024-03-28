import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>

    <li><NavLink className={({isActive}) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/">Home</NavLink></li>

    <li><NavLink className={({isActive}) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/listed">Listed Books</NavLink></li>

    <li><NavLink className={({isActive}) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/pages">Pages to Read</NavLink></li>

    <li><NavLink className={({isActive}) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/latestCollection">Latest Collection</NavLink></li>

    <li><NavLink className={({isActive}) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/writers">Writers</NavLink></li>

    </>
    return (
        <div className="navbar shadow-2xl bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {/* <li><a>Item 1</a></li>
        <li><a>Item 3</a></li> */}
        {links}
      </ul>
    </div>
    <Link to="/"><a className="btn btn-ghost font-bold lg:text-3xl text-xl">Book Vibe</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Item 1</a></li>
      <li><a>Item 3</a></li> */}
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-4 ">
    <a className="btn lg:w-[120px] text-white bg-green-500">Sign in </a>
    <a className="btn lg:w-[120px] text-white bg-[#59C6D2]">Sign up</a>
  </div>
</div>
    );
};

export default Navbar;