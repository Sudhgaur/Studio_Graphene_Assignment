import React, { useState } from 'react';
import './NavbarStyle.css';

import { FaBars, FaTimes, } from 'react-icons/fa'

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [showProduct, setShowProduct] = useState(false);

    const navbar = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        {
            name: 'Our Products', id: 'product', child: [
                { name: 'Product 1', id: 'p1' },
                { name: 'Product 2', id: 'p2' },
                { name: 'Product 3', id: 'p3' },
                { name: 'Product 4', id: 'p4' },
            ]
        },
        { name: 'Contact Us', id: 'contact' },
    ];
    return (

        <div className='Navbar'>
            <div className='head-items'>
                <div className='left'>
                    <h3>ShopKart</h3>
                </div>
                <div className='right-items'>
                    <h3>wishlist (0)</h3>
                    <h3>Bag (0)</h3>
                </div>
                <div className='right' onClick={() => setToggle(!toggle)}>
                    {toggle ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <div className={toggle ? 'toggle-view' : 'toggle-none'}>
                <ul className='hemburger-menu'>
                    {navbar.map((items) => (
                        <li className='hem-links'>
                            {items.name}
                            {items.child ? <span className="material-icons" onClick={() => setShowProduct(!showProduct)} style={showProduct ? { transform: 'rotate(180deg)' } : {}}>
                                expand_more
                            </span> : null}

                            {showProduct && <ul className='productHem-links'>
                                {items.child && items.child.map((ele) => (
                                    <li>{ele.name}</li>
                                ))}

                            </ul>}
                        </li>
                    ))}

                </ul>
            </div>
            <div className='line'>
                <hr />
                <span className='star star-pos'></span>
            </div>

            <div className='NavItems'>
                <ul className='nav-links'>
                    {navbar.map((items) => (
                        <a href={`#${items.id}`}>
                            <li className='nav-list' onClick={() => setShowProduct(!showProduct)}>
                                {items.name}
                                {items.child ? <span className="material-icons" style={showProduct ? { transform: 'rotate(180deg)' } : {}}>
                                    expand_more
                                </span> : null}

                                {showProduct ? <ul className='product-links'>
                                    {items.child && items.child.map((ele) => (
                                        <li>{ele.name}</li>
                                    ))}

                                </ul> : null}
                            </li>
                        </a>
                    ))}

                </ul>

            </div>
        </div>
    )
}

export default Navbar