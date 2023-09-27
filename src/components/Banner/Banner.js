import React from 'react';
import './BannerStyle.css';

function Banner() {
    return (
        <div className='banner'>
            <br />
            <h1 className='banner-text'>Fresh</h1>
            <h1 className='banner-year'>2022</h1>
            <h1 className='banner-text'>Look</h1>
            <div className='orange-banner'>
                <div className='rectangle'></div>
            </div>
            <div>
                <hr className='banner-strightline' />
                <span className='Banner-star'></span>
            </div>
        </div>
    )
}

export default Banner