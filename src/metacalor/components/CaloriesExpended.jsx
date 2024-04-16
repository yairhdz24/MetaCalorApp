import React from 'react'

export const CaloriesExpended = () => {
  return (
    <div className='max-w-md mx-auto p-8 sm:mx-0 shadow-sm bg-white border border-gray-200 rounded-2xl'>
      <h2 className='font-semibold text-center mb-3 text-xl text-gray-800'>
        Registro de Calorías Gastadas
      </h2>
      <input
        type='text'
        placeholder='Ingresar calorías gastadas'
        // value={caloriasInput}
        className='w-full border p-2 rounded-md mb-4'
        // onChange={e => setCaloriasInput(e.target.value)}
      />
      <div className='grid mt-2'>
        <button
          className='text-base mx-auto bg-green-600 hover:bg-green-500 font-medium rounded-lg text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none'
          // onClick={handleIngresarCalorias}
        >
          Ingresar
        </button>
      </div>
    </div>
  )
}
