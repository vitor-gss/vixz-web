export const Option = (props) => {
  return (

        <div className="media single-feature wow fadeInUp flex flex-row justify-end" data-wow-delay="0.2s">
                    <div className="media-body text-right media-right-margin">
                      <h5>{props.title}</h5>
                      <p>{props.subtitle}</p>
                    </div>
                    <div className="media-right icon-border"> <span className={props.icon}
                        aria-hidden="true"></span> </div>
                  </div>
  )
}
