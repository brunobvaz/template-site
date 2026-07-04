import { arrowForwardOutline, heartOutline } from 'ionicons/icons'
import tshirtImage from '../../assets/images/cards/tshirt.png'
import Badge from '../badge/Badge.jsx'
import TemplateIcon from '../TemplateIcon.jsx'

const colors = [
  { label: 'Sand', className: 'product-card__color--sand' },
  { label: 'Black', className: 'product-card__color--black' },
  { label: 'White', className: 'product-card__color--white' },
]

export default function ClothesCard() {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={tshirtImage} alt="Cream classic t-shirt on a neutral background" />
        <Badge className="badge--gold product-card__badge">New</Badge>
        <button className="product-card__favorite" type="button" aria-label="Add to wishlist">
          <TemplateIcon icon={heartOutline} />
        </button>
      </div>

      <div className="product-card__content">
        <p className="product-card__eyebrow">Luxe Atelier</p>
        <h3 className="product-card__title">Classic T-Shirt</h3>
        <p className="product-card__text">
          Premium cotton. Timeless fit. Everyday elegance.
        </p>

        <div className="product-card__footer">
          <p className="product-card__price">€59,00</p>

          <div className="product-card__colors" aria-label="Available colors">
            {colors.map((color) => (
              <span
                aria-label={color.label}
                className={`product-card__color ${color.className}`}
                key={color.label}
                role="img"
              />
            ))}
          </div>

          <a className="product-card__link" href="#classic-t-shirt" aria-label="Explore classic t-shirt">
            <TemplateIcon icon={arrowForwardOutline} />
          </a>
        </div>
      </div>
    </article>
  )
}
