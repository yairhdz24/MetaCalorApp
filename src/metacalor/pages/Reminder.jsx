import React, { useState, useEffect } from 'react';
import { reminderApi } from '../../store/api/reminderApi';

const { useGetRemindersQuery, useAddReminderMutation, useDeleteReminderMutation, useUpDateReminderMutation } = reminderApi;

export const Reminder = () => {
  const { data: reminders, isLoading } = useGetRemindersQuery({}, { refetchOnMountOrArgChange: true });

  const [newReminder, setNewReminder] = useState({
    name: '',
    hour: '',
  });

  const [selectedReminderId, setSelectedReminderId] = useState(null);
  const [addReminder, { isLoading: isAdding }] = useAddReminderMutation();
  const [deleteReminderById] = useDeleteReminderMutation();
  const [updateReminderById] = useUpDateReminderMutation();

  const handleAddReminder = async () => {
    try {
      await addReminder(newReminder).unwrap();
      setNewReminder({ name: '', hour: '' });
    } catch (error) {
      console.error('Error al agregar el recordatorio:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReminder((prevReminder) => ({ ...prevReminder, [name]: value }));
  };

  const handleDeleteReminder = async (id) => {
    try {
      await deleteReminderById(id).unwrap();
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el recordatorio: ', error);
    }
  };

  const handleUpdateReminder = async () => {
    try {
      await updateReminderById({ id: selectedReminderId, data: newReminder }).unwrap();
      setNewReminder({ name: '', hour: '' });
      setSelectedReminderId(null);
    } catch (error) {
      console.error('Error al actualizar el recordatorio: ', error);
    }
  };

  const handleEditReminder = (reminder) => {
    setNewReminder({ name: reminder.name, hour: reminder.hour });
    setSelectedReminderId(reminder.id);
  };

  useEffect(() => {
    if (selectedReminderId !== null) {
      const selected = reminders.find((reminder) => reminder.id === selectedReminderId);
      if (selected) {
        setNewReminder({ name: selected.name, hour: selected.hour });
      }
    }
  }, [selectedReminderId, reminders]);

  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <div className='md:w-1/2 p-5 rounded-lg shadow-xl bg-gray-100'>
          <h2 className='text-center font-bold uppercase text-2xl mt-3 mb-5'>
            {selectedReminderId ? 'Editar Recordatorio' : 'Crear Recordatorio'}
          </h2>
          <div className='flex justify-center'>
            <div className='space-y-5 w-1/2'>
              <div className=''>
                <input
                  className='border-2 rounded-md px-4 py-2 w-full bg-white focus:outline-none focus:border-blue-500 mb-5'
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  value={newReminder.name}
                  onChange={handleInputChange}
                />
                <input
                  className='border-2 rounded-md px-4 py-2 w-full bg-white focus:outline-none focus:border-blue-500 mb-5'
                  type='time'
                  name='hour'
                  value={newReminder.hour}
                  onChange={handleInputChange}
                />
                <div className='flex justify-center'>
                  {selectedReminderId ? (
                    <button
                      className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-400 mb-5'
                      onClick={handleUpdateReminder}
                      disabled={isAdding}
                    >
                      {isAdding ? 'Actualizando...' : 'Guardar Cambios'}
                    </button>
                  ) : (
                    <button
                      className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-400 mb-5'
                      onClick={handleAddReminder}
                      disabled={isAdding}
                    >
                      {isAdding ? 'Agregando...' : 'Guardar Recordatorio'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10 md:mt-0 md:w-1/2'>
          <div className='p-5 rounded-lg shadow-md bg-gray-100'>
            <h2 className='text-center font-bold uppercase text-2xl mt-3 mb-5'>Recordatorios</h2>
            <div>
              {isLoading ? (
                <p>Cargando...</p>
              ) : (
                <ul>
                  {reminders &&
                    reminders.map((reminder, index) => (
                      <li key={index} className='mb-3 p-3 bg-white rounded-md flex justify-between items-center'>
                        <div>
                          <p className='font-semibold'>Nombre: {reminder.name}</p>
                          <p>Hora: {reminder.hour}</p>
                        </div>
                        <div>
                          <button
                            className='bg-white hover:bg-white text-blue-600 font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:ring-blue-400 mr-2'
                            onClick={() => handleEditReminder(reminder)}
                            disabled={isAdding}
                          >
                            {isAdding ? 'Actualizando...' : '✎'}
                          </button>
                          <button
                            className='bg-white hover:bg-white text-red-600 font-bold py-1 px-3 rounded focus:outline-none focus:ring focus:ring-red-400 ml-2'
                            onClick={() => handleDeleteReminder(reminder.id)}
                            disabled={isAdding}
                          >
                            {isAdding ? 'Eliminando...' : '❌'}
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
