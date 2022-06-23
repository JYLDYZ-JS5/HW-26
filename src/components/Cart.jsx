

// import { useSelector } from 'react-redux'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../action/CartActions';
import { cartSliceActions } from '../slice/CartUiSlice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const dispatch = useDispatch()
  const showCart = useSelector(state => state.get.showCart)
  const data = useSelector(state => state.get.data)

  const cartItems = [{
    id: 1,
    name: 'product',
    quantity: 23,
    totalPrice: 123,
    price: 34
  }]
  // const cartItems = useSelector(state => state.cart.items) //response
  // const showCarts = () => {
  //   setTimeout(() => {
  //     console.log('button tested');
  //     console.log(data);
  //     dispatch(cartActions())
  //   }, 3000);
  // }
  const showCarts = () => {
    // console.log('tested');
    dispatch(cartSliceActions.showCart(true))
  }
  useEffect(() => {
    dispatch(cartActions())
  }, [])
  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <button onClick={showCarts}>Show My Carts From Firebase</button>
      <ul>

        {showCart && data.map(el => (
          <CartItem
            key={el.id}
            item={{
              id: el.id,
              title: el.name,
              quantity: el.quantity,
              total: el.totalPrice,
              price: el.price
            }}
          />
        ))
        }

      </ul>
    </Card>
  );
};

export default Cart;
