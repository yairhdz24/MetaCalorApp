import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { dishesApi } from '../../store/api/dishesApi';
import { alimentsApi } from '../../store/api/alimentsApi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import AsyncSelect from 'react-select/async';
import { useForm } from 'react-hook-form';

const { useUpDateDishMutation, useGetDishQuery } = dishesApi;
const { useLazyGetAlimentsQuery } = alimentsApi;

export const ModalEditDishes = ({ closeModalEditDishes, dishData, isOpen }) => {
  const { control } = useForm();
  const [dishName, setDishName] = useState('');
  const [aliments, setAliments] = useState([]);
  const [updateDish, { isLoading: isUpdating }] = useUpDateDishMutation();
  const [getAliment, { isFetching }] = useLazyGetAlimentsQuery();
  const { data, isLoading } = useGetDishQuery(dishData.id, {
    refetchOnMountOrArgChange: true,
  });
  const { data: alimentsData } = useLazyGetAlimentsQuery();

  const loadOptions = async (inputValue) => {
    try {
      const response = await getAliment({}).unwrap();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDishName(dishData.name || '');
    setAliments(dishData.aliments || []);
  }, [dishData]);

  const handleDishNameChange = (e) => {
    setDishName(e.target.value);
  };

  const handleAlimentRemove = (alimentIndex) => {
    const updatedAliments = [...aliments];
    updatedAliments.splice(alimentIndex, 1);
    setAliments(updatedAliments);
  };

  const updateDishById = async () => {
    try {
      await updateDish({
        id: dishData.id,
        data: { name: dishName, aliments },
      }).unwrap();
      toast.success('Platillo actualizado con éxito', {
        autoClose: 1000,
      });
      closeModalEditDishes();
    } catch (error) {
      toast.error('Error al actualizar el platillo', {
        autoClose: 1000,
      });
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto bg-black bg-opacity-30">
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-orange-500">Editar platillos</h3>
            <button
              type="button"
              onClick={closeModalEditDishes}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4">
              <div>
                <label htmlFor="dish" className="block mb-2 text-sm font-semibold uppercase">
                  Nombre del platillo
                </label>
                <input
                  type="text"
                  name="dish"
                  id="dish"
                  className="bg-gray-50 border text-sm rounded-lg p-2.5 w-full shadow-md"
                  placeholder="Nombre del platillo"
                  value={dishName}
                  onChange={handleDishNameChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="aliments" className="block mb-2 text-sm font-semibold uppercase">
                  Alimentos
                </label>
                <ul>
                  {data?.aliments?.map((aliment, index) => (
                    <li
                      className="flex items-center justify-between font-semibold uppercase text-sm mb-2"
                      key={index}
                    >
                      <span>{aliment.name}</span>
                      <button
                        type="button"
                        onClick={() => handleAlimentRemove(index)}
                        className="ml-2 text-red-500 px-2 py-2"
                      >
                        <RiDeleteBin6Fill />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <label htmlFor="aliments" className="block mb-2 text-sm font-semibold uppercase">
                  Añadir alimentos
                </label>
                <AsyncSelect
                  name="aliments"
                  loadOptions={loadOptions}
                  onChange={(e)=> setAliments(e.map(aliment=>aliment.value))}
                  isMulti
                  defaultOptions
                />
              </div>
              <button
                type="button"
                onClick={updateDishById}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Editar platillo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};