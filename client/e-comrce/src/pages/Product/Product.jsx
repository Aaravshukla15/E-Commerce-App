import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading} = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;




// import React from 'react';
// import { useState } from 'react';
// import './Product.scss';
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";



// const Product = () => {

//   const [selectedImg, setselectedImg] = useState(0)
//   const [quantity, setQuantity] = useState(1)

//   const images = [
//     "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"

//   ];

//   return (
//     <div className='product'>
//       <div className='left'>
//         <div className='images'>
//           <img src={images[0]} alt='' onClick={e=>setselectedImg(0)}/>
//           <img src={images[1]} alt='' onClick={e=>setselectedImg(1)}/>
//         </div>
//         <div className='mainImg'>
//           <img src={images[selectedImg]} alt='' />
//         </div>
//       </div>
//       <div className='right'>
//         <h1>Title</h1>
//         <span className='price'>$160</span>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//          nisi ut aliquip ex ea commodo consequat. 
//          Duis aute irure dolor in reprehenderit in voluptate velit esse
//           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
//           cupidatat non proident, s
//         unt in culpa qui officia deserunt mollit anim id est laborum.</p>

//         <div className='quantity'>
//           <button onClick={()=>setQuantity((prev)=> (prev === 1 ? 1 : prev-1))}>-</button>
//           {quantity}
//           <button onClick={()=>setQuantity((prev)=> prev+1)}>+</button>
//         </div>
//         <button className='add'>
//           <AddShoppingCartIcon /> ADD TO CART
//         </button>
//         <div className='links'>
//           <div className='item'>
//             <FavoriteBorderIcon /> ADD TO WISH LIST
//           </div>
//           <div className='item'>
//             <BalanceIcon /> ADD TO COMPARE
//           </div>
//         </div>
//         <div className="info">
//               <span>Vendor: Polo</span>
//               <span>Product Type: T-Shirt</span>
//               <span>Tag: T-Shirt, Women, Top</span>
//             </div>
//             <hr />
//             <div className="info">
//               <span>DESCRIPTION</span>
//               <hr />
//               <span>ADDITIONAL INFORMATION</span>
//               <hr />
//               <span>FAQ</span>
//             </div>
//       </div>


//     </div>

    
//   )
// }

// export default Product