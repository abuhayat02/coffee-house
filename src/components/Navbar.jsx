import { Link } from "react-router-dom"
import img15 from '../assets/more/15.jpg'


export default function Navbar() {
    let nav = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/add-new-coffee'} >Add Coffee</Link></li>
        </>
    return (
        <div className="navbar sticky w-full ">
            <img className="w-full object-cover mx-auto z-10 h-20 absolute" src={img15} alt="" />
            <div className="navbar-start z-20">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {
                        nav
                       }
                    </ul>
                </div>
                <a className="my-text md:text-2xl text-xl">Coffee House</a>
            </div>
            <div className="navbar-center z-20 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {
                    nav
                  }
                </ul>
            </div>
            <div className="navbar-end z-20">
                <Link to={'/login'} className="px-8 py-2 my-shadow border border-gray-900">Login</Link>
            </div>
        </div>
    )
}
