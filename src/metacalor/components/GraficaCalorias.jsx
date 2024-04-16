import React, { useState, useEffect, useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { caloriesConsumedApi } from '../../store/api/caloriesConsumed.Api'
import { caloriesExpendedApi } from '../../store/api/caloriesExpendedApi'

const { useGetCaloriesConsumedQuery } = caloriesConsumedApi
const { useGetCaloriesExpendedQuery } = caloriesExpendedApi

export const GraficaCalorias = ({ desiredCalorieConsumption }) => {
  const { data: dataConsumed, isLoading } = useGetCaloriesConsumedQuery({})
  const { data: dataExpended, isLoading: isLoadingExpended } = useGetCaloriesExpendedQuery({})
  console.log(dataExpended);

  const calories = useMemo(() => {
    let countCalories = 0
    if (isLoading || isLoadingExpended) return countCalories
    if (dataConsumed?.docs?.length > 0) {
      countCalories += dataConsumed.docs.reduce(
        (acc, item) => acc + item.calories,
        0
      )
    }
    if (dataExpended?.docs?.length > 0) {
      countCalories -= dataExpended.docs.reduce(
        (acc, item) => acc + item.calories,
        0
      )
    }
    return countCalories
  }, [isLoading, isLoadingExpended, dataConsumed, dataExpended])

  const contadorTexto = `${calories.toFixed(2)}/${desiredCalorieConsumption}`

  const data = {
    labels: ['Calorías Restantes', 'Calorías Consumidas'],
    datasets: [
      {
        data: [desiredCalorieConsumption, calories],
        backgroundColor: ['rgba(0, 128, 0, 0.2)', 'rgba(255, 0, 0, 0.2)'], // Verde y Rojo transparentes
        borderColor: ['rgba(0, 128, 0, 1)', 'rgba(255, 0, 0, 1)'],
        borderWidth: 2
      }
    ]
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <>
      <div className='text-center relative'>
        <div>
          <Doughnut data={data} options={chartOptions} height={400} />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-900'>
            {contadorTexto}
          </div>
        </div>
      </div>
    </>
  )
}
