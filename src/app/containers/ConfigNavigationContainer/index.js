import React, { PropTypes } from 'react';

import configNavigationHoc from 'containers/ConfigNavigationContainer/configNavigationHoc';
import ConfigSidebarComponent from 'components/configSidebar/ConfigSidebarComponent';
import ConfigNavigationComponent from 'components/configNavigation/ConfigNavigationComponent';
import { TitleIconComponent } from 'components/icons/IconsComponent';

class ConfigNavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createNewRoute = this.createNewRoute.bind(this);
  }

  createNewRoute() {}

  render() {
    return (
      <div className="ConfigNavigationContainerBlock">
        <div className="ConfigNavigationContainerBlock-title">
          <TitleIconComponent name="IoIosNavigate" /> Config navigation
        </div>
        <div className="ConfigNavigationContainer">
          <div className="ConfigNavigationContainer-block">
            <div className="ConfigNavigationContainer-block-left">
              <ConfigNavigationComponent createNewRoute={this.createNewRoute} />
            </div>
            <div className="ConfigNavigationContainer-block-right">
              <ConfigSidebarComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ConfigNavigationContainer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default configNavigationHoc(ConfigNavigationContainer);