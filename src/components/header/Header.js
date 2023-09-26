import React from 'react';
import './HeaderStyle.css';
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
    return (
        <div className='head-items'>
            <div className='left'>
                <h3>ShopKart</h3>
            </div>
            {/* <div className='right-items'>
                <h3>wishlist (0)</h3>
                <h3>Bag (0)</h3>

            </div> */}
            <div className='right'>
                <FaBars />
            </div>
            <hr />
        </div>
    )
}

export default Header