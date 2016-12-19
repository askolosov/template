import React, { PropTypes } from 'react';

import productOptionsFormHoc from 'containers/ProductOptionsFormContainer/productOptionsFormHoc';
import PageNavLocationComponent from 'components/pageNavLocation/PageNavLocationComponent';
import ProductOptionsFormComponent from 'components/productOptionsForm/ProductOptionsFormComponent';
import NotificationComponent from 'components/notification/NotificationComponent';
import IsLoadingComponent from 'components/isLoading/IsLoadingComponent';
import IsEmptyComponent from 'components/isEmpty/IsEmptyComponent';

export class ProductOptionsFormContainer extends React.Component {
  componentWillMount() {
    this.props.getProductRequest({ id: this.props.params.id });
  }

  componentWillUnmount() {
    this.props.getProductIdle();
  }

  render() {
    const { isLoading, isEmpty, product } = this.props;
    return (
      <div className="ProductOptionsFormContainerBlock">
        <div className="ProductOptionsFormContainerBlock-title">
          <PageNavLocationComponent pageName={product.data.title} />
        </div>
        <div className="ProductOptionsFormContainer">
          <IsLoadingComponent isLoading={isLoading}>
            <IsEmptyComponent isEmpty={isEmpty}>
              <div className="ProductOptionsFormContainer-block">
                <div className="ProductFormContainer-block-full">
                  {this.props.notificationsSuccess.map(notificationSuccess =>
                    <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
                  )}
                  {this.props.notificationsFailure.map(notificationsFailure =>
                    <NotificationComponent isVisible message={notificationsFailure.message} status={notificationsFailure.status} />
                  )}
                </div>
                <div className="ProductOptionsFormContainer-block-left">
                  <ProductOptionsFormComponent
                    createOption={this.props.postProductOptionRequest}
                  />
                </div>
                <div className="ProductOptionsFormContainer-block-right">
                </div>
              </div>
            </IsEmptyComponent>
          </IsLoadingComponent>
        </div>
      </div>
    );
  }
}

ProductOptionsFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  getProductRequest: PropTypes.func.isRequired,
  getProductIdle: PropTypes.func.isRequired,
  postProductOptionRequest: PropTypes.func.isRequired,
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
};

export default productOptionsFormHoc(ProductOptionsFormContainer);