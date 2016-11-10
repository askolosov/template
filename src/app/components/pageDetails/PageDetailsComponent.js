import React, { PropTypes } from 'react';

const PageDetailsComponent = ({ page, pageParsedToHtml }) =>
  <div className="PageDetailsComponentBlock">
    <div className="PageDetailsComponent">
      <div className="PageDetailsComponent-content">
        <p dangerouslySetInnerHTML={{ __html: pageParsedToHtml }} />
      </div>
    </div>
  </div>;

PageDetailsComponent.propTypes = {
  page: PropTypes.object.isRequired,
  pageParsedToHtml: PropTypes.string.isRequired,
};

export default PageDetailsComponent;
