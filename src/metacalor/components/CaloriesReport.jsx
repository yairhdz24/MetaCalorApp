export const CaloriesReport = ({totalCalories, selectedDay, handleSelectChange, calorieData, selectedDayInfo}) => {
  return (
    <>
      <div className='bg-white p-6 rounded-md mb-6'>
        <h3 className='font-bold text-xl text-center mb-4 text-white bg-green-700 rounded-md'>
          Resumen semanal
        </h3>
        <p>
          <span className='font-bold'>Total Kcal:</span> {totalCalories}
        </p>
       
      </div>
      <div className='bg-white p-6 rounded-md mb-64'>
        <h3 className='font-bold text-xl text-center mb-4 text-white bg-green-700 rounded-md'>
          Resumen diario
        </h3>
        <div className='w-full flex justify-center'>
          <select
            className='w-1/3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300'
            value={selectedDay}
            onChange={handleSelectChange}
          >
            <option value='' disabled selected>
              Días
            </option>
            {calorieData.labels.map((day, index) => (
              <option key={index} value={index}>
                {day}
              </option>
            ))}
          </select>
        </div>
          <div className='p-4 mt-4 bg-gray-100 rounded-md'>
            <h4 className='font-bold'>
              Información del día seleccionado: {calorieData.labels[selectedDay]}
            </h4>
            <p>Calorías: {calorieData.calories[selectedDay]}</p>
          </div>
      </div>
    </>
  )
}
