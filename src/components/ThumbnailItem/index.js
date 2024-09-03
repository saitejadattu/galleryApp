// Write your code here.
import './index.css'
const ThumbnaiItem = props => {
  const {eachitem, displayImage, isSame} = props
  const {thumbnailAltText, thumbnailUrl, id} = eachitem
  const thumbImage = isSame ? '' : 'thumb-image'
  const onChange = () => {
    displayImage(eachitem)
  }
  return (
    <li key={id} className="list-item">
      <button className="button" type="button" onClick={onChange}>
        <img
          className={`${thumbImage} thumb`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnaiItem
