import React from 'react';
import { Item } from '../';
import './index.css';

export const ItemList = ({ items }) => {
    return (
        <div className='item-list'>
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}