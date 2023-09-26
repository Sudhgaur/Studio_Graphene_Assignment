import React from 'react';
import './BannerStyle.css';

function Banner() {
    return (
        <div className='banner'>
            <h2 className='banner-text'>Fresh</h2>
            <h2 className='banner-year'>2022</h2>
            <h2 className='banner-text'>Look</h2>
            <div className='orange-banner'>
                <div className='rectangle'></div>
            </div>
            <hr className='banner-strightline' />
            <span className='Banner-star star-banner'></span>
        </div>
    )
}

export default Banner