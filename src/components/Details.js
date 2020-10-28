import React from 'react';
import PropTypes from 'prop-types';
import { ProductConsumer } from "../Context";
import {Link }  from "react-router-dom"
import {ButtonContainer} from "./Button"


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <ProductConsumer>
            
          {  
            (value) => {
             //   console.log("value.detailProduct", value.detailProduct);
                const {id, company,img,info, price, title, inCart} = value.detailProduct;
                return (
                  <div className="container  py-5 ">
                    <div className="row">
                      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                      </div>
                    </div>
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div className="row">
                      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} className="img-fluid" alt="product" />
                        <Link to="/">
                          <ButtonContainer>Back to Product</ButtonContainer>
                        </Link>
                        <ButtonContainer
                          mycart
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                          }}
                        >
                          {inCart ? "inCart" : "add to cart"}
                        </ButtonContainer>
                      </div>
                    </div>
                  </div>
                );


            }

          }
            </ProductConsumer>;
    }
}

Details.propTypes = {};

export default Details;


