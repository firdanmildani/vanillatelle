import React from 'react'

const FooterIcons = props => {
  return (
    <div className="icons d-flex">
      <div className="icon">
        <a href={props.iconRoute} target="_blank">
          <img className='' src={props.iconPath} alt={props.iconAlt} />
        </a>
      </div>
  </div>
  )
}

export default FooterIcons