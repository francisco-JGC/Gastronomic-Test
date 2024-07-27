import './index.scss'
import LazyImage from '../LazyImage'
import { formatPrice } from '../../utils/formatPrice'

export const BurguerMenuItem = ({ title, price, image, description }) => {
  return (
    <div className="burguer-item">
      <LazyImage src={image} alt={title} className="burguer-item-image" />

      <div className="burguer-item-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </div>
  )
}
