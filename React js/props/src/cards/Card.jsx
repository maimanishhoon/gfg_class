import React from 'react'

const Card = (props) => {
  return (
    <div >
        <fieldset>
            <fieldset><legend>Name:</legend>
            {props.fullname}
            </fieldset>
            <fieldset><legend>Age:</legend>
            {props.age}
            </fieldset>
            <fieldset><legend>Address:</legend>
            {props.address}
            </fieldset>
            <fieldset><legend>Phone:</legend>
            {props.phone}
            </fieldset>
        </fieldset>
        <br />
        <br />
       

    </div>
  )
}

export default Card