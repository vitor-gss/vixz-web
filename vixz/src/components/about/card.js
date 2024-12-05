import React from 'react'

export const Card = (props) => {
  return (
    <div className="">
      <div className="icon-box wow fadeInUp" data-wow-delay="0.4s"> <i className={props.icon}
          aria-hidden="true"></i>
        <h5>{props.title}</h5>
        <p>{props.description}
        </p>
      </div>
    </div>
  )
}
