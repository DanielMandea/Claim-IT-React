import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './tab-selector1.css'

const TabSelector1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`tab-selector1-container ${props.rootClassName} `}>
      <div className="tab-selector-img-container">
        {activeTab === 0 && (
          <img
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="tab-selector-img"
          />
        )}
        {activeTab === 1 && (
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="tab-selector-img"
          />
        )}
        {activeTab === 2 && (
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="tab-selector-img"
          />
        )}
      </div>
      <div className="tab-selector1-tabs-menu">
        <div
          onClick={() => setActiveTab(0)}
          className="tab-selector1-tab-horizontal"
        >
          <div className="tab-selector1-divider-container">
            {activeTab === 0 && <div className="tab-selector1-divider"></div>}
          </div>
          <div className="tab-selector1-content">
            <span className="tab-selector1-text">Dashboard</span>
            <span className="tab-selector1-text1 TextRegularNormal">
              Users can effortlessly manage claimed hours and initiate new
              claims, while managers and administrators have the ability to
              claim hours on behalf of others.
            </span>
          </div>
        </div>
        <div
          onClick={() => setActiveTab(1)}
          className="tab-selector1-tab-horizontal1"
        >
          <div className="tab-selector1-divider-container1">
            {activeTab === 1 && <div className="tab-selector1-divider1"></div>}
          </div>
          <div className="tab-selector1-content1">
            <span className="tab-selector1-text2">Claim</span>
            <span className="tab-selector1-text3 TextRegularNormal">
              Users can view an overview of claimed hours, add new claims, and
              managers/administrators can claim on behalf of other users.
            </span>
          </div>
        </div>
        <div
          onClick={() => setActiveTab(2)}
          className="tab-selector1-tab-horizontal2"
        >
          <div className="tab-selector1-divider-container2">
            {activeTab === 2 && <div className="tab-selector1-divider2"></div>}
          </div>
          <div className="tab-selector1-content2">
            <span className="tab-selector1-text4">Invoices</span>
            <span className="tab-selector1-text5 TextRegularNormal">
              Contractors and administrators can seamlessly create, send, and
              manage invoices, facilitating easy tracking of payment statuses.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

TabSelector1.defaultProps = {
  rootClassName: '',
}

TabSelector1.propTypes = {
  rootClassName: PropTypes.string,
}

export default TabSelector1
