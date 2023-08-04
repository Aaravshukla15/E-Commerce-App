import React from 'react';
import Slider from '../../components/slider/slider';
import FeaturedProduct from '../../components/FeatureProducts/Featureproducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contacts/Contact';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProduct type='featured'/>
      <Categories />
      <FeaturedProduct type='trending'/>
      <Contact />
    </div>
  )
}

export default Home;