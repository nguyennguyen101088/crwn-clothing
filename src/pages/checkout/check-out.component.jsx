import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeButtonComponent from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selector";
import './check-out.style.scss';

const CheckOutComponent = ({ cartItems, total }) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <div className='stripe-checkout'>
      <StripeButtonComponent price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps) (CheckOutComponent);