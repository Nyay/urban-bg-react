import React, { FC, useEffect } from 'react';
import { ICardWrapper } from './types';
import { cardWrapperId, handleMouseMove } from '../../static';
import './CardWrapper.css';

export const CardWrapper:FC<ICardWrapper> = ({ children }) => {

    useEffect( () => {
        window.addEventListener('mousemove', handleMouseMove);
        return(() => removeEventListener('mousemove', handleMouseMove))
    }, [])

    return (
        <div id={cardWrapperId} className='card-wrapper'>
            { children }
        </div>
    )
}