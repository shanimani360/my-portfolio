import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){

    return(
        <header className="bg-red-600">
             <div className="container mx-auto flex justify-between">
                 <nav className="flex">

                     <NavLink   to="/"
                      exact 
                      activeClassName="text-white"
                      className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                     >
                         Kapehe
                     </NavLink>
                     <NavLink to="/post" className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-red-700"
                     >
                         Blog Posts
                     </NavLink>
                     <NavLink to="/project" className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-red-700"
                     >
                        Projects
                     </NavLink>
                     <NavLink to="/about" className="inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                     activeClassName="text-red-100 bg-red-700"
                     >
                        About Me!
                     </NavLink>
                 </nav>
                 <div  className="inline-flex py-3 px-3 my-6">
                     <SocialIcon url="https://www.fiverr.com/users/shoaibmasood356/requests" className="mr-4" target="_Blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                     <SocialIcon url="https://www.upwork.com/freelancers/~01f28608bb7a28f4c2" className="mr-4" target="_Blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                     <SocialIcon url="https://www.linkedin.com/in/shoaib-masood-b7880764/" className="mr-4" target="_Blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                 </div>
             </div>
        </header>
    )
}