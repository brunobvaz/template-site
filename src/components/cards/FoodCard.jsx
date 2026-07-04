import { arrowForwardOutline, restaurantOutline } from 'ionicons/icons'
import foodImage from '../../assets/images/cards/food.png'
import Avatar from '../avatar/Avatar.jsx'
import Badge from '../badge/Badge.jsx'
import TemplateIcon from '../TemplateIcon.jsx'

export default function FoodCard() {
  return (
    <article className="feature-card">
      <div className="feature-card__media">
        <img src={foodImage} alt="Grilled salmon with rice, tomatoes, greens, and lime" />
        <Avatar className="avatar--floating feature-card__avatar" icon={restaurantOutline} />
      </div>

      <div className="feature-card__content">
        <Badge className="badge--accent feature-card__badge">Delicious</Badge>
        <h3 className="feature-card__title">Food Recipe</h3>
        <p className="feature-card__text">
          Discover easy and tasty recipes for every occasion.
        </p>
        <a className="feature-card__link" href="#food-recipe">
          Explore
          <TemplateIcon icon={arrowForwardOutline} />
        </a>
      </div>
    </article>
  )
}
