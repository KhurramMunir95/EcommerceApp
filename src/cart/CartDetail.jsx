import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { cartTotal, increaseItem, decreaseItem } from '../features/cart/cartSlice';

const CartDetail = () => {
    const dispatch = useDispatch();
    const { cartItems, total, count } = useSelector((state) => state.cart)
    useEffect(() => { 
       dispatch(cartTotal())
    }, [cartItems])

    return (
        <>
            <Container className='mt-5'>
                {
                    cartItems.map((item) => (
                        <div key={item.id} className='d-flex gap-5'>
                            <div>
                                <img src={item.img} width='50' />
                                <p className='mb-0'>{item.name}</p>
                                <p>{item.price} /-</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <button onClick={() => item.count > 0 && dispatch(decreaseItem(item))}>-</button>
                                <p className='mb-0'>{item.count}</p>
                                <button onClick={() => dispatch(increaseItem(item))}>+</button>
                            </div>
                        </div>
                    ))
                }
                <h4>Total - {total} - {count}</h4>
            </Container>
        </>
    )
}

export default CartDetail