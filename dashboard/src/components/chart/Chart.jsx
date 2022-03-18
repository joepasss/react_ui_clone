import './chart.scss';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function CustomChart({ data, options }) {
  return (
    <div className='chart'>
      <Line data={data} options={options} />
    </div>
  );
}

export default CustomChart;
