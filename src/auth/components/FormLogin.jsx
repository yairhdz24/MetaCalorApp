import { useContext, useState } from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  RiMailLine,
  RiLock2Line,
  RiEyeFill,
  RiEyeOffFill
} from 'react-icons/ri'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ErrorMessage } from './ErrorMessage'
import { authApi } from '../../store/api/authApi'
import { AuthContext } from '../context/AuthContext'

// import 'react-toastify/dist/ReactToastify.css';
import { loginSchema } from '../validations/login.validation'
import { Spinner } from '../../components/Spinner'

const { useLoginMutation } = authApi

export const FormLogin = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const [showPassword, setShowPassword] = useState(false)

  const { login } = useContext(AuthContext)

  const [loginApi, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = async data => {
    try {
      const res = await loginApi(data).unwrap()
      const newData = {
        token: res.token,
        ...res.user
      }
      console.log(newData)
      login(newData)
      navigate('/dashboard/home', {
        replace: true
      })
    } catch (error) {
      setError('password', { message: 'La contraseña es incorrecta' })
      setError('email', { message: 'Email incorrecto', type: 'incorrect' })
    }
  }

  return (
    <div className='text-center shadow-xl rounded-lg py-10 px-5 mb-10 bg-white w-full'>
      <h3 className='text-xl font-bold uppercase text-green-600 mb-5'>
        Iniciar sesion
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5 relative'>
          <label
            htmlFor='email'
            className='font-bold uppercase flex justify-start'
            style={{ color: '#0DB30D' }}
          >
            Correo Electrónico
          </label>
          <RiMailLine className='absolute left-2 top-14 -translate-y-3' />
          <input
            type='text'
            placeholder='Usuario@gmail.com'
            className={`pl-7 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-md ${
              errors.email ? 'border-red-500' : ''
            }`}
            {...register('email')}
          />
          {errors?.email && <ErrorMessage error={errors?.email?.message} />}
        </div>

        <div className='mb-3 relative'>
          <label
            className='font-bold uppercase flex justify-start'
            style={{ color: '#0DB30D' }}
          >
            Contraseña
          </label>
          <div className='relative'>
            <RiLock2Line className='absolute left-2 top-1/2 translate-y-5' />
            {showPassword ? (
              <RiEyeOffFill
                onClick={handleShowPassword}
                className='absolute right-5 top-1/2 translate-y-6 hover:cursor-pointer'
              />
            ) : (
              <RiEyeFill
                onClick={handleShowPassword}
                className='absolute right-5 top-1/2 translate-y-6 hover:cursor-pointer'
              />
            )}
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='************'
            className={`pl-7 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-md ${
              errors.password ? 'border-red-500' : ''
            }`}
            {...register('password')}
          />

          {errors?.password && (
            <ErrorMessage error={errors?.password?.message} />
          )}
        </div>

        <div className='flex justify-center'>
          <button
            className='w-1/2 p-3 flex justify-center rounded-md font-bold cursor-pointer mt-5 text-white uppercase bg-green-600 hover:bg-green-700 hover:to-green-700 shadow-lg hover:shadow-green-500/50'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Login'}
          </button>
        </div>
        <div className='mt-4'>
          ¿No tienes cuenta?
          <Link
            component={RouterLink}
            to='/auth/register'
            className='text-blue-500 hover:underline'
          >
            ¡Regístrate!
          </Link>
        </div>
      </form>
    </div>
  )
}
