import React, { PropTypes } from 'react';
import 'containers/ConfigProductCategoriesContainer/_ConfigProductCategoriesContainer.scss';

import configProductCategoriesHoc from 'containers/ConfigProductCategoriesContainer/configProductCategoriesHoc';
import ConfigCategoriesComponent from 'components/ConfigCategories/ConfigCategoriesComponent';
import ConfigSubCategoriesComponent from 'components/ConfigSubCategories/ConfigSubCategoriesComponent';
import ConfigSidebarComponent from 'components/ConfigSidebar/ConfigSidebarComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import flow from 'lodash/flow';

export class ConfigProductCategoriesContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div className="ConfigProductCategoriesContainerBlock">
        <div className="ConfigProductCategoriesContainerBlock-title">Config product categories</div>
        <div className="ConfigProductCategoriesContainer">
          <div className="ConfigProductCategoriesContainer-block">
            <div className="ConfigProductCategoriesContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationFailure =>
                <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
              )}
            </div>
            <div className="ConfigProductCategoriesContainer-block-left">
              <ConfigCategoriesComponent createNewCategory={this.props.postProductCategoryRequest} />
              <ConfigSubCategoriesComponent categories={this.props.mappedCategories} createNewSubCategory={this.props.postProductSubCategoryRequest} />
            </div>
            <div className="ConfigProductCategoriesContainer-block-right">
              <ConfigSidebarComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const propTypes = {
  componentWillMount: PropTypes.func.isRequired,
  componentWillUnmount: PropTypes.func.isRequired,
  notificationsSuccess: PropTypes.array.isRequired,
  notificationsFailure: PropTypes.array.isRequired,
  mappedCategories: PropTypes.array.isRequired,
  mappedSubCategories: PropTypes.array.isRequired,
  getProductCategoriesRequest: PropTypes.func.isRequired,
  getProductSubCategoriesRequest: PropTypes.func.isRequired,
  getProductCategoriesIdle: PropTypes.func.isRequired,
  getProductSubCategoriesIdle: PropTypes.func.isRequired,
  postProductCategoryRequest: PropTypes.func.isRequired,
  postProductSubCategoryRequest: PropTypes.func.isRequired,
};

ConfigProductCategoriesContainer.propTypes = propTypes;
export const init = flow([configProductCategoriesHoc]);
export default init(ConfigProductCategoriesContainer);
