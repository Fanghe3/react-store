import React from 'react';
import PropTypes from 'prop-types';
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Title from "../Title";

class Cart extends React.Component {
   

    render() {
        return (
            <section>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if(cart.length>0){
                return (
                  <React.Fragment>
                    <Title name="your" title="cart"/>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotals value={value} history={this.props.history}/>
                  </React.Fragment>
                );
              }else{
                  return <EmptyCart/>;
              }
            }
          }
        </ProductConsumer>
        
      </section>
        );
    }
}

Cart.propTypes = {};

export default Cart;
