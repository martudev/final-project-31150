import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../components';
import { getProductById } from '../../services/firebase';
import './index.css';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then(product => setItem(product))
    }, [id]);

    return (
        <div className='item-detail-container'>
            {item && <ItemDetail item={item} />}
        </div>
    )
}