import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toogleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingCardIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss';

const CartIcon = ({ toogleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingCardIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToPros = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToPros) (CartIcon);