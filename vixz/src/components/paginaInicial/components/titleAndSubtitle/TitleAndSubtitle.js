

export const TitleAndSubtitle = (props) => {
  return (
    <div>
        <h3 className="text-xl">{props.title}</h3>
        <span className="line"></span>
        <p className='pb-3 text-gray-600 text-lg'>{props.subtitle}</p>
    </div>
  )
}
