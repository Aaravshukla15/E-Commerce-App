import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data } = useFetch
  (`/sub-categories?[filters][categories][id][$eq]=${catId}`)


  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          { data?.map( (item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={20}
              max={10000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
      
    </div>
  );
};

export default Products;



// import React, { useState } from 'react';
// import './Products.scss';
// import List from '../../components/List/List';
// import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';

// const Products = () => {

//   const catId = parseInt(useParams().id)
//   const [maxPrice, setMaxPrice] = useState(10000)
//   const [sort, setSort] = useState(null)
//   const [selectedSubCats, setSelectedSubCats] = useState([]);

//   const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const ischecked = e.target.checked;

//     selectedSubCats(
//       ischecked
//       ?[...selectedSubCats, value]
//       : selectedSubCats.filter((item) => item!== value)
//     );
//   };

//   return (
//     <div className='products'>
//       <div className='left'>
//         <div className='filteritem'>
//         <h2>Product Catgories</h2>
//         {data?.map((item) => (<div className='inputItem' key={item.id}>
//         <input type='checkbox' id={item.id} value={item.id} onChange = {handleChange}/>
//         <label htmlFor={item.id}>{item.attributes.title}</label>
//         </div>))}
//         </div>
//         <div className='filteritem'>
//         <h2>Filter By Price</h2>
//         <div className='inputItem'>
//           <span>0</span>
//           <input  type='range' min={50} max={10000} onChange={(e) => setMaxPrice(e.target.value)}/>
//           <span>{maxPrice}</span>
//         </div>
//         </div>
//         <div className='filteritem'>
//           <h2>Short By</h2>
//           <div className='inputItem'>
//             <input type='radio' id='asc' value="asc" name="price" onChange={e =>setSort("asc")}/>
//             <label htmlFor='asc'>Price (Lowest First)</label>
//           </div>
//           <div className='inputItem'>
//             <input type='radio' id='dasc' value="dasc" name="price" onChange={e =>setSort("dasc")}/>
//             <label htmlFor='dasc'>Price (Highest First)</label>
//           </div>
//         </div>
//       </div>
//       <div className='right'>
//         <img
//           className="catImg"
//           src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt=""
//         />

//         <List catId = {catId} maxPrice={maxPrice} sort= {sort} subCats = {selectedSubCats}/>
//       </div>
//     </div>
//   )
// }

// export default Products;