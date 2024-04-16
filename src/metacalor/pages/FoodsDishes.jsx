
import { DishesAvailable } from '../components/DishesAvailable'
import { CreateDish } from '../components/CreateDish'


export const FoodsDishes = () => {
  
  return (
    <div className='flex flex-col items-center mt-12 p-16 gap-16 md:flex-row md:justify-between md:mr-3 md:ml-3'>
      <DishesAvailable/>
      <CreateDish/>
    </div>
  )
}
