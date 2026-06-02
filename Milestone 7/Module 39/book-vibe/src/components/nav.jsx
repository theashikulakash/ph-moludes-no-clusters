import { Link } from 'react-router-dom'

const Nav = () => {

    const links = (
        <>
            <li>
                <Link to="/" className="active:bg-primary uppercase">Home</Link>
            </li>
            <li>
                <Link to="/listed-books" className="uppercase">Listed Books</Link>
            </li>
            <li>
                <Link to="/pages-to-read" className="uppercase">Pages to Read</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 container mx-auto py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-bold gap-0">Book<span className="text-secondary">Vibe</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 font-semibold">
                <a className="btn btn-primary text-white hidden sm:flex px-6">Sign In</a>
                <a className="btn btn-secondary text-white hidden sm:flex px-6">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;