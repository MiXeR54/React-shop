import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { fetchProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const Card = (props) => {
  const productList = props.products.map((product) => {
    return (
      <div className="col-4" key={product.id}>
        <div className="card mb-3">
          <img
            src="https://via.placeholder.com/100x50"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="clearfix">
              {/* <Link to={`/product/${product.id}`}> */}
              <h5 className="card-title float-left">{product.title}</h5>
              {/* </Link> */}
              <h5 className="card-title float-right">{product.price}$</h5>
            </div>
            <p className="card-text">Описание товара</p>
            <button
              className="btn btn-primary"
              onClick={(e) => props.addToCart(props.cartItems, product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container col-9">
      <div className="row">{productList}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Card);
