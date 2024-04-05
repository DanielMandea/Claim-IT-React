import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './tab-selector2.css'

const TabSelector2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`tab-selector2-container ${props.rootClassName} `}>
      <div className="tab-selector2-tabs-menu">
        <div
          onClick={() => setActiveTab(0)}
          className="tab-selector2-tab-horizontal"
        >
          <div className="tab-selector2-divider-container">
            {activeTab === 0 && <div className="tab-selector2-divider"></div>}
          </div>
          <div className="tab-selector2-content">
            <span className="tab-selector2-text">Projects and Team</span>
            <span className="tab-selector2-text1">
              The app displays enrolled projects and team information, allowing
              administrators to create projects, establish contracts, and manage
              three project types: ongoing, done, and incomplete, providing
              comprehensive control over all contracts for projects or employees
              with in-depth insights into individual user details.
            </span>
          </div>
        </div>
        <div
          onClick={() => setActiveTab(1)}
          className="tab-selector2-tab-horizontal1"
        >
          <div className="tab-selector2-divider-container1">
            {activeTab === 1 && <div className="tab-selector2-divider1"></div>}
          </div>
          <div className="tab-selector2-content1">
            <span className="tab-selector2-text2">Reports</span>
            <span className="tab-selector2-text3">
              Crucial for administrators, it provides various overviews,
              including hours worked per project and leave requests, ensuring a
              comprehensive company overview.
            </span>
          </div>
        </div>
        <div
          onClick={() => setActiveTab(2)}
          className="tab-selector2-tab-horizontal2"
        >
          <div className="tab-selector2-divider-container2">
            {activeTab === 2 && <div className="tab-selector2-divider2"></div>}
          </div>
          <div className="tab-selector2-content2">
            <span className="tab-selector2-text4">Leave and Travel</span>
            <span className="tab-selector2-text5">
              The app facilitates the sending and management of travel reports
              and expenses, while users efficiently handle their leave requests,
              with administrators seamlessly approving these requests.
            </span>
          </div>
        </div>
      </div>
      <div className="tab-selector-img-container tab-selector2-image-container">
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
    </div>
  )
}

TabSelector2.defaultProps = {
  rootClassName: '',
}

TabSelector2.propTypes = {
  rootClassName: PropTypes.string,
}

export default TabSelector2
