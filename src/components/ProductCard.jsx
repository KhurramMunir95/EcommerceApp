import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, decreaseItem, increaseItem } from '../features/cart/cartSlice';
import { decreaseQuantity, increaseQuantity } from '../features/product/productSlice';

const ProductCard = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  
  const addToCart = (item) => {
    setCount(1); //showing product quantity
    dispatch(addItem(item)) //adding item to the cart
    dispatch(decreaseQuantity(item)); //decreasing product quantity from cart
  }

  // decrease product count
  const decreaseFromCart = (item) => {
    setCount(count - 1); //showing product quantity
    dispatch(decreaseItem(item)); //decreasing product quantity from cart
    dispatch(increaseQuantity(item)); //increasing product stock in products
  }

  // increase product count
  const addMoreToCart = (item) => { 
    setCount(count + 1); //showing product quantity
    // checking if stock is available
    if(count !== item.stock) {
      dispatch(increaseItem(item)); //increasing product quantity in cart or adding more quantity
      dispatch(decreaseQuantity(item)); //decreasing product stock in products
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Rs.{item.price}
          - {item.stock} pieces in stock!
        </Card.Text>
        {
          item.available ?
          count > 0 ?
          <div className='d-flex gap-2'>
            <Button variant='success' onClick={() => decreaseFromCart(item)}>-</Button>
            <input type='number' className='w-25' value={count} disabled />
            <Button variant='success' className={item.stock === 0 && 'disabled'} onClick={() => addMoreToCart(item)}>+</Button>
          </div>
          : <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
          : <p className='text-danger'>Sold Out!</p>
        }
      </Card.Body>
    </Card>
  )
}

export default ProductCard