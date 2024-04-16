import { Spinner } from '../../components/Spinner'

export const ButtonInput = ({ isLoading, text }) => {
  return (
    <button
            className='w-1/2 p-3 flex justify-center rounded-md font-bold cursor-pointer mt-5 text-white uppercase bg-green-600 hover:bg-green-700 hover:to-green-700 shadow-lg hover:shadow-green-500/50'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : text}
          </button>
  )
}
