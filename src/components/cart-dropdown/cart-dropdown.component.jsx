import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :
                <span className='empty-msg'>Your cart is empty</span>
            }
        </div>
        <CustomButton 
            onClick={() => {
                history.push('/checkout');
                dispatch(toogleCartHidden());
            }}
        >GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps) (CartDropdown));