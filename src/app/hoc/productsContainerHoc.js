import { connect } from 'react-redux';
import * as actions from 'actions/index';

const mapStateToProps = (state) => ({
  products: state.productsReducer.products,
});

const mapDispatchToProps = {
  getProductsRequest: actions.getProductsRequest,
};

export default (ProductsContainer) => connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);