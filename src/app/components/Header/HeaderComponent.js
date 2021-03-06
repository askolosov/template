import React, { PropTypes } from 'react';
import 'components/Header/_HeaderComponent.scss';

import { Link } from 'react-router';

const HeaderComponent = ({ children }) =>
  <div className="HeaderComponentBlock">
    <div className="HeaderComponent">
      <div className="HeaderComponent-left">
        <div className="Logo"><Link to="/">{APP_TITLE}</Link></div>
      </div>
      <div className="HeaderComponent-right">
        {children}
      </div>
    </div>
  </div>;

HeaderComponent.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default HeaderComponent;
