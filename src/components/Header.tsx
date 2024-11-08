import React from 'react'
import Logo from './image/Logonetflix.png';
import {Link} from 'react-router-dom'
import { GrSearch } from "react-icons/gr";
import "./Home.scss"

function Header() {
 
  return (
        <nav className='header'>
          <img src={Logo} alt="" />

          <div>
          <Link to="/tvshow">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recently">Recently</Link>
          <Link to="/mylist">My List</Link>
       
          </div>

          <GrSearch/>

        </nav>
        
  )
}

export default Header