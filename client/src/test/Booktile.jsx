import React from 'react';
import './Booktile.css'

const Booktile = ({name, img}) => {
    return (
        <div className='book-tile'>
            <h4 className='title-for-book'>{name}</h4>
            <img className='img-for-book' src={img} alt="book image" />
        </div>
    );
}

export default Booktile;
