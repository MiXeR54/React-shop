import React from "react";
import Cart from "../Components/Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Product = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="container col-9">
          <div className="card mb-3">
            <img
              src="https://via.placeholder.com/100x50"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="clearfix">
                <h5 className="card-title float-right">
                  {/* {props.product.price}$ */}
                </h5>
              </div>
              <p className="card-text">Описание товара</p>
              <button
                className="btn btn-primary"
                // onClick={(e) => props.addToCart(props.cartItems, product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, null)(Product);
