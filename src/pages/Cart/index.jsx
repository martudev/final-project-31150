import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../components';
import CartContext from '../../store/cart';
import './index.css';

export const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
      {cartCtx.products.length !== 0 ?
        <div className='total-container'>
          <p>Precio total: ${cartCtx.getTotalPrice()}</p>
          <button>Terminar compra</button>
        </div> :
        <>
          <h2>No hay productos en el carrito</h2>
          <button className='button-brown'>
            <Link to='/'>Ir al inicio</Link>
          </button>
        </>
      }
    </div>
  )
}