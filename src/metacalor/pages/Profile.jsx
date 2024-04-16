import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { profileApi } from '../../store/api/profileApi'
import { Form } from '../../components/HookForm/Form'
import { useContext, useEffect, useState } from 'react'
import { Input } from '../../components/HookForm/Input'
import { profileSchema } from '../validations/profile.validation'
import { Select } from '../../components/HookForm/Select'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../../auth/context/AuthContext'

const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useDeleteProfileMutation
} = profileApi

export const Profile = () => {

  const [result, setResult] = useState(null);

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(profileSchema)
  })

  const { reset, setValue } = methods;

  const { data, isLoading } = useGetProfileQuery({
    refetchOnMountOrArgChange: true
  });

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [deleteProfile, { isLoading: isDeleting }] = useDeleteProfileMutation();

  useEffect(() => {
    if (!isLoading && data?.id) {
      reset({
        ...data,
        birthday: data.birthday.split('T')[0]
      })
      console.log(data);
    }
  }, [isLoading, data]);

  const { height, weight } = methods.watch()

  useEffect(() => {
    const calculateImc = () => {
      if (weight && height) {
        const weightInKg = parseFloat(weight)
        const heightInMt = parseFloat(height)

        if (!isNaN(weightInKg) && !isNaN(heightInMt) && heightInMt > 0) {
          const imcCalculated = weightInKg / (heightInMt * heightInMt)
          setResult(imcCalculated.toFixed(2))
          setValue('imc', imcCalculated.toFixed(2))
        } else {
          setResult(null)
          setValue('imc', '')
        }
      }
    }
    calculateImc()
  }, [setValue, weight, height]);

  const onSubmit = async data => {
    delete data.id
    delete data.createdAt
    delete data.updatedAt
    delete data.email
    delete data.isAccountVerified
    delete data.avatar
    delete data.score
    delete data.streak
    try {
      await updateProfile(data).unwrap()
      toast.success('Perfil actualizado', {
        autoClose: 1000
      })
    } catch (error) {
      toast.error('Error al actualizar el perfil', {
        autoClose: 1000
      })
    }
  }

  // const navigate = useNavigate();

  const deleteAccount = async () => {
    try {
      await deleteProfile().unwrap()
      toast.success('Cuenta eliminada', {
        autoClose: 1000
      })
      logout()
      navigate('/', {
        replace: true
      })
    } catch (error) {
      toast.error('Error al eliminar la cuenta', {
        autoClose: 1000
      })
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center sm:flex-row'>
        <div className='flex flex-col p-5 sm:p-10 w-full sm:w-2/5 justify-center shadow-xl rounded-md mt-6 sm:mr-6'>
          <div className='mt-4 sm:mt-11 mb-3 bg-slate-200 rounded-md shadow-md'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/4792/4792929.png'
              alt='Avatar'
              className='w-20 h-20 sm:w-40 sm:h-40 rounded-full mx-auto sm:mr-3'
            />
          </div>
          <div className='w-full flex justify-center'>
            <button
              onClick={deleteAccount}
              className='mb-3 mt-3 w-2/5 bg-red-500 hover:bg-red-700 p-3 sm:p-5 text-white text-center rounded-md uppercase font-bold'
            >
              Eliminar cuenta
            </button>
          </div>
        </div>

        <div className='w-full sm:w-3/5 mt-6 p-5 sm:p-10'>
          <Form methods={methods} onSubmit={onSubmit}>
            <div className='flex gap-4 justify-between flex-wrap'>
              <Input name='name' label={'Nombre'} />
              <Input name='lastName' label={'Apellidos'} />
              <Input
                name='birthday'
                label={'Fecha de nacimiento'}
                type='date'
              />
            </div>

            <div className='flex gap-4 justify-between flex-wrap'>
              <Select
                name='gender'
                label={'Sexo'}
                options={[
                  { label: 'Hombre', value: 'male' },
                  { label: 'Mujer', value: 'female' }
                ]}
              />
              <Input name='height' label={'Altura'} type={'number'} />
              <Input name='weight' label={'Peso'} type={'number'} />
            </div>

            <div className='flex gap-4 justify-between flex-wrap'>
              <Input name='imc' label={'IMC'} value={result !== null ? result : ''}/>
              <Input
                name='desiredCalorieConsumption'
                label={'Calorias a consumir'}
              />
              <div className='flex-1 min-w-[200px]'></div>
            </div>
            <button
              type='submit'
              className='cursor-pointer bg-orange-500 p-3 sm:p-4 mt-3 uppercase font-bold rounded-md text-white w-full sm:flex-none'
            >
              Enviar
            </button>
          </Form>
        </div>
      </div>
    </>
  )
}
