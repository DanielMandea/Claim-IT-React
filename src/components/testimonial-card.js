import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card.css'

const TestimonialCard = (props) => {
  return (
    <div
      className={`testimonial-card-testimonial-card ${props.rootClassName} `}
    >
      <img
        alt={props.starsAlt}
        src={props.starsSrc}
        className="testimonial-card-stars"
      />
      <span className="testimonial-card-content">{props.content}</span>
      <div className="testimonial-card-avatar">
        <img
          alt={props.avatarImageAlt}
          src={props.avatarImageSrc}
          className="testimonial-card-avatar-image"
        />
        <div className="testimonial-card-avatar-content">
          <span className="testimonial-card-avatar-name TextRegularSemiBold">
            {props.avatarName}
          </span>
          <span className="testimonial-card-avatar-company TextRegularNormal">
            {props.avatarCompany}
          </span>
        </div>
        <div className="testimonial-card-divider-horizontal"></div>
        <img
          alt={props.companyLogoAlt}
          src={props.companyLogoSrc}
          className="testimonial-card-company-logo"
        />
      </div>
    </div>
  )
}

TestimonialCard.defaultProps = {
  starsAlt: 'StarsI312',
  content:
    'Claim has revolutionized the way we manage our company. It has streamlined our processes and improved our efficiency, saving us both time and money.',
  avatarName: 'John Doe',
  starsSrc: '/external/starsi312-dm9r.svg',
  companyLogoSrc: '/logo/logo-navbar.svg',
  avatarImageAlt: 'AvatarImageI312',
  companyLogoAlt: 'Logo2ColorDarkI312',
  rootClassName: '',
  avatarCompany: 'CEO, ABC Company',
  avatarImageSrc: '/external/avatarimagei312-jmgt-200w.webp',
}

TestimonialCard.propTypes = {
  starsAlt: PropTypes.string,
  content: PropTypes.string,
  avatarName: PropTypes.string,
  starsSrc: PropTypes.string,
  companyLogoSrc: PropTypes.string,
  avatarImageAlt: PropTypes.string,
  companyLogoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarCompany: PropTypes.string,
  avatarImageSrc: PropTypes.string,
}

export default TestimonialCard
