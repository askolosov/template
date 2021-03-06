import React, { PropTypes } from 'react';
import 'containers/PageCreateContainer/_PageCreateContainer.scss';

import configMock from 'mocks/config';
import pageCreateHoc from 'containers/PageCreateContainer/pageCreateHoc';
import PageFormComponent from 'components/PageForm/PageFormComponent';
import NotificationComponent from 'components/Notification/NotificationComponent';
import ProductAboutComponent from 'components/ProductAbout/ProductAboutComponent';
import flow from 'lodash/flow';

export class PageCreateContainer extends React.Component {
  componentWillMount() {
    this.props.componentWillMount();
  }

  componentWillUnmount() {
    this.props.componentWillUnmount();
  }

  render() {
    return (
      <div className="PageCreateContainerBlock">
        <div className="PageCreateContainerBlock-title">Pages</div>
        <div className="PageCreateContainer">
          <div className="PageCreateContainer-block">
            <div className="PageCreateContainer-block-full">
              {this.props.notificationsSuccess.map(notificationSuccess =>
                <NotificationComponent isVisible message={notificationSuccess.message} status={notificationSuccess.status} />
              )}
              {this.props.notificationsFailure.map(notificationFailure =>
                <NotificationComponent isVisible message={notificationFailure.message} status={notificationFailure.status} />
              )}
            </div>
            <div className="PageCreateContainer-block-left">
              <PageFormComponent
                createPage={this.props.postPageRequest}
                citiesList={configMock.citiesList}
                categories={this.props.mappedCategories}
                subCategories={this.props.mappedSubCategories}
              />
            </div>
            <div className="PageCreateContainer-block-right">
              <ProductAboutComponent />
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
  mappedCategories: PropTypes.object.isRequired,
  mappedSubCategories: PropTypes.object.isRequired,
  postPageRequest: PropTypes.func.isRequired,
  getPageCategoriesRequest: PropTypes.func.isRequired,
  getPageSubCategoriesRequest: PropTypes.func.isRequired,
  getPageCategoriesIdle: PropTypes.func.isRequired,
  getPageSubCategoriesIdle: PropTypes.func.isRequired,
};

PageCreateContainer.propTypes = propTypes;
export const init = flow([pageCreateHoc]);
export default init(PageCreateContainer);
