import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ModalDishes } from './ModalDishes';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { ModalEditDishes } from './ModalEditDishes';
import { dishesApi } from '../../store/api/dishesApi';
import { RiDeleteBin6Fill, RiPencilFill } from 'react-icons/ri';

const { useGetDishesQuery, useUpDateDishMutation, useDeleteDishMutation } = dishesApi;

export const DishesAvailable = () => {
  const {
    register,
    formState: { errors }
  } = useForm();

  const { data, isLoading } = useGetDishesQuery({}, { refetchOnMountOrArgChange: true });

  const [updateDish, { isLoading: isUpdating }] = useUpDateDishMutation();
  const [deleteDish, { isLoading: isDeleting }] = useDeleteDishMutation();

  const [isOpenDishesModal, setIsOpenDishesModal] = useState(false);
  const [selectedDishForDishesModal, setSelectedDishForDishesModal] = useState(null);

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedDishForEditModal, setSelectedDishForEditModal] = useState(null);

  const openDishesModal = (id) => {
    setIsOpenDishesModal(!isOpenDishesModal);
    setSelectedDishForDishesModal(isOpenDishesModal ? null : id);
  };

  const openEditModal = (id) => {
    setIsOpenEditModal(!isOpenEditModal);
    setSelectedDishForEditModal(isOpenEditModal ? null : id);
  };

  const closeModal = () => {
    setIsOpenDishesModal(false);
    setSelectedDishForDishesModal(null);
  };

  const closeModalEditDishes = () => {
    setIsOpenEditModal(false);
    setSelectedDishForEditModal(null);
  };

  const deleteDishById = async (id) => {
    try {
      await deleteDish(id).unwrap();
      toast.success('Platillo eliminado con éxito');
    } catch (error) {
      toast.error('Error al eliminar el platillo');
    }
  };

  return (
    <div className='flex flex-col w-full max-w-3xl p-5 space-y-5 rounded-md shadow-2xl'>
      <h2 className='text-center font-bold uppercase text-2xl mt-3 mb-3'>Platillos Disponibles</h2>
      <div className='max-h-80 overflow-auto pr-5'>
        <div className='p-0'>
          {data?.docs.map((dish) => (
            <div key={dish.id} className='flex justify-center items-center'>
              <div
                className='p-2.5 m-2.5 shadow-md rounded-md w-1/2 cursor-pointer'
                onClick={() => openDishesModal(dish.id)}
              >
                <div className=''>
                  <div className='flex justify-between'>
                    <div>{dish.name}</div>
                    {selectedDishForDishesModal === dish.id ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronUp} />
                    )}
                  </div>
                </div>
                {isOpenDishesModal && selectedDishForDishesModal === dish.id && (
                  <ModalDishes selectedDish={selectedDishForDishesModal} closeModal={closeModal} />
                )}
              </div>
              <button
                onClick={() => deleteDishById(dish.id)}
                className='ml-2.5 bg-red-500 text-white py-2.5 px-5 rounded-md shadow-md text-sm hover:bg-red-600 cursor-pointer filter hover:brightness-90 transition-all duration-300 active:transform active:scale-95 active:bg-red-700'
              >
                <RiDeleteBin6Fill />
              </button>
              <button
                onClick={() => openEditModal(dish.id)}
                className='ml-2.5 bg-blue-500 text-white py-2.5 px-5 rounded-md shadow-md text-sm hover:bg-blue-500 cursor-pointer filter hover:brightness-90 transition-all duration-300 active:transform active:scale-95 active:bg-blue-700'
              >
                <RiPencilFill />
              </button>
              {isOpenEditModal && selectedDishForEditModal === dish.id && (
                <ModalEditDishes
                  closeModalEditDishes={closeModalEditDishes}
                  dishData={dish}
                  isOpen={isOpenEditModal}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
