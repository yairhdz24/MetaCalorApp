export const Dishes = ({openModalDishes, dishesModal, openModalAliments, alimentsModal}) => {
  return (
    <>
      <div>
        <div
          onClick={openModalDishes}
          className='text-base shadow-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none'
        >
          Platillos
          {dishesModal === true &&
            data?.docs.map(dish => (
              <button key={dish.id} className='flex items-center'>
                <div className='p-2.5 m-2.5 shadow-md rounded-md w-full cursor-pointer'>
                  <div className='flex justify-center'>
                    <button className=''>{dish.name}</button>
                  </div>
                </div>
              </button>
            ))}
        </div>
        <button
          className='text-base mx-auto bg-green-500 font-medium rounded-lg mt-7 hover:bg-green-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none'
          // onClick={handleIngresarCalorias}
        >
          Ingresar
        </button>
      </div>

      <div>
        <div>
          <button
            className='text-base border text-gray-800 hover:bg-gray-100 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none'
            onClick={openModalAliments}
          >
            Alimentos
          </button>
          {alimentsModal && (
            <Form
              className='flex flex-col space-y-3.5'
              methods={methods}
              onSubmit={onSubmit}
            >
              <div className='flex flex-col'>
                <div className='mb-3 w-full'></div>
                <div className='flex mb-3'>
                  <div className='w-full'>
                    <label className='text-sm  font-semibold'>
                      ¡Añade sus ingredientes!
                    </label>
                    <RHFAsyncSelect
                      name={'aliments'}
                      cacheOptions
                      loadOptions={loadOptions}
                      isMulti
                      defaultOptions
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              >
                Agregar Platillo
              </button>
            </Form>
          )}
        </div>
      </div>
    </>
  )
}
