import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Asegúrate de importar la versión correcta de Chart.js

export const CalorieChart = ({ data }) => {
  const chartContainer = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (myChart) {
        myChart.destroy(); 
      }

      const ctx = chartContainer.current.getContext('2d');

      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Calorías',
              data: data.calories,
              backgroundColor: 'rgba(55, 193, 73, 0.2)',
              borderColor: '#49c738',
              borderWidth: 1,
            },
          ],
        },
        options: {
          // Configuraciones de tu gráfico
        },
      });
    }

    // Limpia el gráfico al desmontar el componente
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartContainer} />;
};

