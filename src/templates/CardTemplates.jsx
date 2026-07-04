import ClothesCard from '../components/cards/ClothesCard.jsx'
import FoodCard from '../components/cards/FoodCard.jsx'



export function CardTemplateGrid() {
  return (
    <div className="template-card-showcase">
      <FoodCard />
      <ClothesCard />
    </div>
  )
}
