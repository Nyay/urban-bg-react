import React, { FC } from 'react';
import { ICard } from './types';
import randomColor from 'randomcolor';
import './Card.css'

export const Card:FC<ICard> = ({ imgSrc , alt }) => {
    return (
        <div className='card' style={{ background: randomColor()}}>
            <img src={ `./${ imgSrc }` } alt={ alt } />
        </div>
    )
}