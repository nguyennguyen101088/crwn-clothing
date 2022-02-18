import React from "react";
import { connect } from "react-redux";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingCardIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';

const CartIcon = ({ toogleCartHidden }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingCardIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToPros = dispatch => ({
    toogleHiddenCart: () => dispatch(toogleCartHidden())
});

export default connect(null, mapDispatchToPros) (CartIcon);