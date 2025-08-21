import React from 'react'
import customhook from '../customHook/customhook';
import Cards from './Cards';

const Home = () => {
  const [data] = customhook("https://vikas-products.onrender.com/products")
   return (
    <div className=''>
      {data &&
        data.map((item) => {
          return (
            // <div key={item.id} >
            //   <h1>{item.name}</h1>
            // </div>
      //   <div key={item} className="card bg-base-100 w-96 shadow-sm">
      //     <p>category : {item.category}</p>
      //       <figure className="px-10 pt-10">
      //         <img
      //           src={item.image_url}
      //           alt="Shoes"
      //           className="rounded-xl" />
      //       </figure>
      //       <div className="card-body items-center text-center">
      //         <h2 className="card-title">{item.name} </h2>
      //         <p>{item.description}</p>
      //         <h3> ${item.price}</h3>
      //         <div className="card-actions">
      //           <button className="btn btn-primary">Buy Now</button>
      //         </div>
      //       </div>
      // </div>
      < Cards key ={item.product_id} category ={item.category} name ={item.name} image={item.image_url} Description={item.description} price={item.price}  />
          );
        })}
    </div>
  );
};
export default Home;