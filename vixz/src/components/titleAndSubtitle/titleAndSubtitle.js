

export const TitleAndSubtitle = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        <span className="line"></span>
        <p className='pb-3 text-slate-600'>{props.subtitle}</p>
    </div>
  )
}
