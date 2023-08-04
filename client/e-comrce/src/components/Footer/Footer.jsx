import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h2>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>Childrens</span>
          <span>New Arrivals</span>
          <span>Accesories</span>
        </div>
        <div className='item'>
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h2>About</h2>
          <span>Lorem Ipsum dolor sit amet come ctetur andipisicing elit,
           end do clusmod tempor ut dalore.</span>
        </div>
        <div className='item'>
           <h2>Contact</h2>
          <span>Lorem Ipsum dolor sit amet come ctetur andipisicing elit,
           end do clusmod tempor ut dalore.</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>HETROCITY</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved.</span>
        </div>
        <div className='right'>
          <img  src='img\pay.png' alt='pay logo'/>
        </div>
      </div>
    </div>
  )
}

export default Footer