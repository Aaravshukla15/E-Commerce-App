import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="left">
        <div className='item'>
          <img src= "img/en.png" alt=''/>
          <KeyboardArrowDownIcon />
        </div>
        <div className='item'>
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className='item'>
          <Link className='link'  to="/products/1">Men</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/products/2">Women</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/products/3">Children</Link>
        </div>
      </div>
          
      <div className="center">
        <Link className='link' to="/">HETROCITY</Link>
        <h6 className='lin'>A diverse way of fashion</h6>
      </div>
          
      <div className="right">
      <div className="item">
        <Link className='link' to="/">Home</Link>
      </div>
      <div className="item">
        <Link className='link' to="/">About</Link>
      </div>
      <div className="item">
        <Link className='link' to="https://linktr.ee/aaravshukla">Contact</Link>
      </div>
      
        
      <div className='icons'>
        <SearchIcon />
        <PersonOutlineIcon />
        <FavoriteBorderIcon />
      <div className='cartIcon'>
        <ShoppingCartIcon onClick= {()=> setOpen(!open)}/>
        <span className='cis'> {products.length} </span>
      </div>
      </div>
      </div>
    </div>
    {open && <Cart />}
  </div>  
  )
}

export default Navbar