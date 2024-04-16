import React from 'react';
import { profileApi } from '../../store/api/profileApi';
import { usersApi } from '../../store/api/usersApi';
import primerLugar from '../icons/medalla_1.png';
import segundoLugar from '../icons/medalla_2.png';
import tercerLugar from '../icons/medalla_3.png';
import podio from '../icons/podio.png';

const { useGetUsersQuery } = usersApi;
const { useGetPositionQuery } = profileApi;

export const Range = () => {
  const { data: usersData, isLoading: isLoadingUsers, error: usersError } = useGetUsersQuery({
    limit: 10,
    page: 1,
    sort: '-score',
  });

  const { data: positionMe, isLoading: isLoadingPosition, error: positionError } = useGetPositionQuery();

  if (isLoadingUsers || isLoadingPosition) return <div className="text-center">Cargando...</div>;

  if (usersError || positionError) {
    return (
      <div className="text-center text-red-500">
        Hubo un error al cargar los datos. Por favor, inténtalo de nuevo.
      </div>
    );
  }

  const users = usersData?.docs || [];

  return (
    <div className="s z-10 text-black px-10">
      <img
        src={podio}
        alt="Podio"
        className="w-32 h-32 mt-10 mb-4 border-4 border-green-500 rounded-full p-2"
      />
      <h2 className="text-3xl font-bold mb-4">¡Desafía tus Límites!</h2>
      <p className="text-xl text-black mb-4">
        Descubre el poder de la consistencia diaria con nuestros desafíos de rachas. ¡Conquista el podio y eleva tu rendimiento al siguiente nivel!
      </p>

      <div className="relative -z-10 justify-center flex flex-col items-center mt-10 mb-28 space-y-5 sm:flex-row sm:justify-center sm:space-x-10">
        <div className="p-8 px-10 rounded-lg shadow-md bg-green-600 text-white w-full sm:w-1/2">
          <div className="flex justify-between">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-4">Líderes de la Semana</h2>
              {users.map((user, index) => (
                <div key={index} className="flex items-center mb-2">
                  {index <= 2 ? (
                    <img src={[primerLugar, segundoLugar, tercerLugar][index]} alt={`Medalla ${index + 1}`} className="w-10 h-10" />
                  ) : (
                    <span className="mb-3 text-xl font-semibold w-10 text-center">{index + 1}</span>
                  )}
                  <div className="ml-3 mb-2 flex flex-col">
                    <span className="font-semibold ">{user.name} ({user.score} PTS)</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-left ml-2 flex flex-col">
              <h2 className="text-2xl font-bold mb-5 px-5">Racha</h2>
              {users.map((user, index) => (
                <div key={index} className="flex items-center mb-5">
                  <h1 className="text-xl font-semibold text-gray-900 px-10">{user.streak} días</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex-col- w-full sm:w-1/2 ">
          <div className="p-6 bg-gradient-to-r from-green-600 to-green-500 rounded-lg text-white mb-5">
            <h2 className="text-2xl font-bold mb-2">Mi Posición Actual</h2>
            <div className="flex items-center">
              {positionMe.position <= 3 ? (
                <img src={[primerLugar, segundoLugar, tercerLugar][positionMe.position - 1]} alt={`Puesto ${positionMe.position}`} className="w-10 h-10" />
              ) : null}
              <span className="ml-3 ">{positionMe.name} ({positionMe.score} PTS)</span>
              <span className="ml-3 font-semibold"> Racha {positionMe.streak} días</span>
            </div>
          </div>

          <div className="p-6 bg-green-600 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Recomendaciones para Subir de Ranking</h2>
            <ul className="list-disc pl-6 mt-5">
              <li className='mb-10 mt-10 font-semibold'>Cumple con tu meta de calorías diaria.</li>
              <li className='mb-10 font-semibold'>Sé constante, registra tu consumo todos los días.</li>
              <li className='mb-10 font-semibold'>Evita un consumo no saludable de macronutrientes, ya que te resta puntos.</li>
              <li className='mb-14 font-semibold'>Realiza ejercicio regularmente para mejorar tu salud general.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
