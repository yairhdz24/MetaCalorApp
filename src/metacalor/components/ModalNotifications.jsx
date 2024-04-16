export const ModalNotifications = ({
  isOpenNotification,
  setisOpenNotification
}) => {
  const closeNotification = () => {
    setisOpenNotification(false)
  }

  return (
    <div>
      {isOpenNotification && (
        <div className='bg-white shadow-md w-64 h-screen fixed right-0 top-0 transform translate-x-1/5 transition-transform ease-in-out duration-300'>
          <div className='p-4 text-gray-800'>
            <div className='flex justify-between mb-6'>
              <h2 className='text-2xl font-bold uppercase text-orange-500'>
                Notificaciones
              </h2>
              <button
                onClick={closeNotification}
                className='bg-red-500 hover:bg-red-700 px-2 text-white text-center font-bold text-xl rounded-md'
              >
                x
              </button>
            </div>
            <ul className='mt-4 flex flex-col'>
              <li>
                <a
                  href='/dashboard/notifications'
                  className='mb-6 font-semibold text-xl mr-2 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-md w-full p-2'
                >
                  <span className='flex items-center'>
                    <span className='flex items-center'>
                      <span className='mr-2'>Notificación</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
