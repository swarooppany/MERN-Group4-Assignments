import React from 'react';
import './product.css'
import {Link} from 'react-router-dom';
import { Cart } from '../pages/cart';
export const Header=()=>{
    return(
        <div className='head_container'>
            <h1>Add Comics for sale!!!</h1>
            <ul>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </div>
    );
}

export const Product= (props)=>{
    const {name,price,image} = props;
    return(
        <div className='main_container'>
            <div className='product_container'>
                <div className='product_image'>
                    <img src={image}/>
                </div>
                <div className='product_title'>{name}</div>
                <div className='product_price'>{price}</div>
                <div className='button_container'>
                    <button className='buy'>Buy</button>
                </div>
            </div>
        </div>    
    );
}
