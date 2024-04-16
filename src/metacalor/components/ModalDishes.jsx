import { dishesApi } from '../../store/api/dishesApi'

const { useGetDishQuery } = dishesApi

export const ModalDishes = ({ closeModal, selectedDish }) => {
  
  const { data, isLoading } = useGetDishQuery(selectedDish, {
    refetchOnMountOrArgChange: true
  });

  if(isLoading) return <p className='text-center font-semibold uppercase text-orange-400'>Cargando...</p>

  return (
    <div className='mt-4'>
      <div className='modal'>
        <div className='modal-content'>
          <ul className=''>
            {data.aliments && data.aliments.length > 0 ? (
              data.aliments.map((aliment, ingIndex) => (
                <li className='font-semibold uppercase text-sm mb-2' key={ingIndex}>{aliment.name}</li>
              ))
            ) : (
              <p>No hay ingredientes disponibles.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}