import React, { useContext, useEffect, useState } from 'react'
import { GraficaCalorias } from '../components/GraficaCalorias'
import { dishesApi } from '../../store/api/dishesApi'
import { alimentsApi } from '../../store/api/alimentsApi'
import { Form } from '../../components/HookForm/Form'
import { RHFAsyncSelect } from '../../components/HookForm/RHFAsyncSelect'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../auth/context/AuthContext'
import { toast } from 'react-toastify'
import { caloriesConsumedApi } from '../../store/api/caloriesConsumed.Api'
import { caloriesExpendedApi } from '../../store/api/caloriesExpendedApi'

const { useLazyGetDishesQuery } = dishesApi
const { useLazyGetAlimentsQuery } = alimentsApi
const { useAddCaloriesConsumedMutation } = caloriesConsumedApi
const { useAddCaloriesExpendedMutation } = caloriesExpendedApi

export const MetaCalorPage = () => {
  const [getAliment, { isFetching }] = useLazyGetAlimentsQuery()
  const [getDishes] = useLazyGetDishesQuery()
  const [addCaloriesConsumed] = useAddCaloriesConsumedMutation()
  const [addCaloriesExpended] = useAddCaloriesExpendedMutation()

  const [caloriesExpended, setCaloriesExpended] = useState(0)
  const [calories, setCalories] = useState(0)

  const { user } = useContext(AuthContext)
  const { desiredCalorieConsumption } = user

  const methods = useForm({
    // resolver: yupResolver(disheschema)
  })

  const { register } = methods

  const loadOptions = async inputValue => {
    try {
      const response = await getAliment({search: inputValue}).unwrap()
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const loadDishes = async inputValue => {
    try {
      const response = await getDishes({search: inputValue}).unwrap()
      return response.docs
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitCaloriesConsumed = async data => {
    try {
      const caloriesAliments = data.aliments.reduce(
        (acc, aliment) => acc + aliment.calories,
        0
      )
      const caloriesDishes = data.dishes.reduce(
        (acc, dish) => acc + dish.calories,
        0
      )

      await addCaloriesConsumed({
        aliments: data.aliments.map(aliment => aliment.value),
        dish: data.dishes.map(dish => dish.value),
        calories: caloriesAliments + caloriesDishes,
        macronutrients: {}
      }).unwrap()
      toast.success('Platillo añadido con exito', {
        autoClose: 1000
      })
    } catch (error) {
      toast.error('Error al añadir el platillo', {
        autoClose: 1000
      })
      console.log(error)
    }
  }

  const onSubmitCaloriesExpended = async data => {
    try {
      const calories = parseFloat(data.calories)
      await addCaloriesExpended({
        calories: calories
      }).unwrap()
      toast.success('Calorías gastadas añadidas con éxito', {
        autoClose: 1000
      })
    } catch (error) {
      toast.error('Error al añadir las calorías gastadas', {
        autoClose: 1000
      })
      console.error(error)
    }
  }

  const handleSubmitCaloriesExpended = e => {
    e.preventDefault()
    const caloriesExpendedInput = e.target.caloriesExpended.value
    if (calutateCaloriesConsumed() < caloriesExpended + caloriesExpendedInput) {
      toast.error('No puedes gastar más calorías de las que consumes', {
        autoClose: 1000
      })
      return
    }
    setCaloriesExpended(prev => prev + Number(caloriesExpendedInput))
  }

  return (
    <div className='ml-auto flex flex-col sm:flex-row justify-between mt-11'>
      <div className='ml-auto w-full sm:w-1/3 sm:ml-40 mb-10 sm:mb-0'>
        <GraficaCalorias
          desiredCalorieConsumption={desiredCalorieConsumption}
          calories={calories}
        />
      </div>

      <div className='w-full sm:w-1/2 -mr-20'>
        <div className='max-w-md mx-auto p-8 mb-5 sm:mx-0 sm:mb-10 shadow-sm bg-white border border-gray-200 rounded-2xl'>
          <h2 className='text-center font-semibold text-2xl text-gray-800'>
            Registro de Calorías Consumidas
          </h2>
          <p className='mt-4 text-sm text-gray-900 text-center'>
            ¿Qué deseas ingresar?
          </p>
          <Form methods={methods} onSubmit={onSubmitCaloriesConsumed}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
              <div className='text-base px-4 duration-300 transition-colors focus:outline-none'>
                <label className='text-sm font-semibold '>
                  ¡PLatillos disponibles!
                </label>
                <RHFAsyncSelect
                  name={'dishes'}
                  cacheOptions
                  loadOptions={loadDishes}
                  isMulti
                  defaultOptions
                />
              </div>

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
            <div className='flex justify-center mt-6 p-3 bg-green-600 hover:bg-green-700  rounded-md'>
              <button type='submit' className='text-white font-bold text-md'>
                Enviar
              </button>
            </div>
          </Form>

          <div className='grid mt-2'></div>
        </div>
        <Form
          className='max-w-md mx-auto p-8 sm:mx-0 shadow-sm bg-white border border-gray-200 rounded-2xl'
          methods={methods}
          onSubmit={onSubmitCaloriesExpended}
        >
          <h2 className='font-semibold text-center mb-3 text-xl text-gray-800'>
            Registro de Calorías Gastadas
          </h2>
          <input
            type='text'
            placeholder='Ingresar calorías gastadas'
            className='w-full border p-2 rounded-md mb-4'
            {...register('calories')} // Asegúrate de registrar el input con React Hook Form
          />
          <div className='grid mt-2'>
            <button
              type='submit'
              className='text-base mx-auto bg-green-600 hover:bg-green-500 font-medium rounded-lg text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none'
            >
              Ingresar
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}
