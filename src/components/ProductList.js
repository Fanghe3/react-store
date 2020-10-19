import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Title from "./Title"
 
import {ProductConsumer} from "../Context"

class ProductList extends React.Component {
     

    render() {

        
        return (
          <React.Fragment>
            <div className="py-5">
              <div className="container   ">
                 <div className=" row  ">
                    <ProductConsumer>
        {    myvalue => { 
           return  myvalue.products.map( item =>  <Product  key={item.id} product={item} /> )
        }
             
      
                        
                         
                        }
                    </ProductConsumer>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

ProductList.propTypes = {};

export default ProductList;
