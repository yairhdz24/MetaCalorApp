import React from 'react'
import { dishesApi } from '../../store/api/dishesApi'
import { alimentsApi } from '../../store/api/alimentsApi'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Form } from '../../components/HookForm/Form'
import { Input } from '../../components/HookForm/Input'
import { RHFAsyncSelect } from '../../components/HookForm/RHFAsyncSelect'
import { yupResolver } from '@hookform/resolvers/yup'
import { disheschema } from '../validations/dishes.validations'

const { useAddDishMutation } = dishesApi
const { useLazyGetAlimentsQuery } = alimentsApi

export const CreateDish = () => {
  const methods = useForm({
    resolver: yupResolver(disheschema)
  })
  
  const [addDish, { isLoading }] = useAddDishMutation()
  const [getAliment, { isFetching }] = useLazyGetAlimentsQuery()

  const loadOptions = async inputValue => {
    try {
      const response = await getAliment({ search: inputValue }).unwrap()
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async data => {
    console.log(data)
    try {
      await addDish({
        name: data.name,
        aliments: data.aliments.map(aliment => aliment.value)
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

  return (
    <div className='flex flex-col w-full rounded-md shadow-2xl bg-gray-100 gap-4'>
      <div className='bg-white rounded-md p-6'>
        <h1 className='text-center font-bold uppercase text-2xl mt-3 mb-3'>
          Crea tu platillo ideal
        </h1>
        <div className='flex justify-center'>
          <Form
            className='flex flex-col space-y-3.5'
            methods={methods}
            onSubmit={onSubmit}
          >
            <div className='flex flex-col'>
              <div className='mb-3 w-full'>
                <Input name='name' label={'Nombre platillo'} />
              </div>
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
        </div>
      </div>
    </div>
  )
}
