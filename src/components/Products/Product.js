import React, { useEffect, useState } from 'react';
import './ProductsStyle.css';
import axios from 'axios';


import { FaBars, FaTimes, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'

function Product() {
    const [products, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [filter, setFilter] = useState('')

    let box = document.querySelector('.item-cards');

    const btnPrev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width - 16;
        // console.log(width);
    }

    const btnNext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width + 16;
        // console.log(width);
    }
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").
            then((response) => setProduct(response.data))
            .catch((error) => console.log(error));
        axios.get("https://fakestoreapi.com/products/categories").
            then((response) => setCategory(response.data))
            .catch((error) => console.log(error));
    }, [])
    console.log("Products=>", products, '\n Category=>', category)
    let productArray = filter ? products.filter(ele => ele.category == filter) : products
    return (
        <div className='myProducts'>
            <div className='myProducts-top'>
                <div className='left-myproduct'>
                    <h1>New Products</h1>

                </div>

                <div className='right-myproduct'>
                    <div className='icons'>
                        <h4 onClick={() => btnPrev()}><FaLongArrowAltLeft /></h4>
                        <h4 onClick={() => btnNext()}><FaLongArrowAltRight /></h4>
                    </div>
                </div>

            </div>

            <div className='myProducts-bottom'>
                <div className='left-bottom'>
                    {
                        category.map((cat) => (
                            <li onClick={() => setFilter(cat)} style={cat == filter ? { fontSize: '24px', fontWeight: 'normal' } : {}}> {cat} </li>
                        ))
                    }
                </div>

                <div className='right-bottom'>
                    <div className='item-cards'>
                        {
                            productArray.map((items) => (
                                <div className='card-data'>
                                    <img src={items.image} alt="Img-data" />
                                    <h6>{items.title}</h6>
                                    <p>{items.description}</p>
                                    <p><b>${items.price}</b></p>
                                </div>

                            ))
                        }


                    </div>


                </div>

            </div>

            <div className='small-icons'>
                <h4 onClick={() => btnPrev()}><FaLongArrowAltLeft /></h4>
                <h4 onClick={() => btnNext()}><FaLongArrowAltRight /></h4>
            </div>

        </div>
    )
}

export default Product