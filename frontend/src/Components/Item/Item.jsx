import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>
            {props.name}
        </p>
        <div className="item-price">
            <div className="item-new_price">
                ${props.new_price}
            </div>
            <div className="item-old_price">
                <s>${props.old_price}</s>
            </div>
        </div>
      
    </div>
  )
}

export default Item
