import { useState } from 'react';
import { CalorieChart } from '../components/CalorieChart';
import { caloriesData as b } from '../data/caloriesData';
import { CaloriesReport } from '../components/CaloriesReport';
import { reportsApi } from '../../store/api/reportsApi';

const { useGetReportsQuery } = reportsApi;

export const Reports = () => {
const { data, isLoading } = useGetReportsQuery();

  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelectChange = (e) => {
    setSelectedDay(e.target.value);
  };

  if(isLoading) return <div>Cargando...</div>
console.log(Object.values(data))
console.log(Object.keys(data))
  const totalCalories = Object.values(data).reduce((acc, calories) => acc + calories, 0);
  const calorieData = {
    labels : Object.keys(data),
    calories : Object.values(data)
  }
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">Registro semanal de calorías</h1>
        <CalorieChart data={calorieData} />
      </div>

      <div className="w-1/2 p-8">
        <div className="flex flex-col justify-between h-full">
          <CaloriesReport totalCalories={totalCalories} selectedDay={selectedDay} handleSelectChange={handleSelectChange} calorieData={calorieData}/>
        </div>
      </div>
    </div>
  );
};
