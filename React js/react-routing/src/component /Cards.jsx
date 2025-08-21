import React from 'react'


const Cards = (props) => {
  return (
    <div>
            <div key={props} className="card bg-base-100 w-96 shadow-sm">
            <p>category : {props.category}</p>
                <figure className="px-10 pt-10">
               <img src={props.image} alt={props.name} 
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">{props.name} </h2>
                <p>{props.description}</p>
                <h3> ${props.price}</h3>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
        </div>
      </div>
  )
}

export default Cards