import React, { PropTypes } from 'react';
import 'containers/ProductsContainer/_ProductsContainer.scss';

import productsHoc from 'containers/ProductsContainer/productsHoc';
import productsProviderHoc from 'containers/ProductsContainer/productsProviderHoc';
import productsResizeHoc from 'containers/ProductsContainer/productsResizeHoc';
import ProductComponent from 'components/Products/ProductComponent';
import ProductFiltersComponent from 'components/ProductFilters/ProductFiltersComponent';
import IsLoadingComponent from 'components/IsLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/IsEmpty/IsEmptyComponent';
import isEmpty from 'lodash/isEmpty';
import flow from 'lodash/flow';

export class ProductsContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div className="ProductsContainerBlock">
        <div className="ProductsContainerBlock-title">Products</div>
        {!isEmpty(this.props.distinctProductOptions.data) ?
          <div className="ProductsContainerBlock-filters">
            <ProductFiltersComponent
              distinctProductOptions={this.props.distinctProductOptions}
              getFilteredProductsRequest={this.props.getFilteredProductsRequest}
            />
          </div>
        : null}

        <div className="ProductsContainer">
          <IsLoadingComponent isLoading={this.props.isLoading}>
            <IsEmptyComponent isEmpty={this.props.isEmpty}>
              <div className="ProductsContainer-products">
                {this.props.products.data && this.props.products.data.map((product) =>
                  <div key={product.id}><ProductComponent product={product} height={this.props.maxHeight} /></div>
                )}
              </div>

              <div className="ProductsContainer-loadMore">
                <button onClick={this.props.getProductsRequestModified}>Load more</button>
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      categoryId: PropTypes.string,
      subCategoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  searchForm: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  products: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  distinctProductOptions: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
  maxHeight: PropTypes.number.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
  getProductsRequestModified: PropTypes.func.isRequired,
  getProductsIdle: PropTypes.func.isRequired,
  getDistinctProductOptionsRequest: PropTypes.func.isRequired,
  getDistinctProductOptionsIdle: PropTypes.func.isRequired,
  getFilteredProductsRequest: PropTypes.func.isRequired,
};

ProductsContainer.propTypes = propTypes;
export const init = flow([productsHoc, productsProviderHoc, productsResizeHoc]);
export default init(ProductsContainer);
