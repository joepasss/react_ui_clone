import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';

import './home.scss';

const Home = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'First dataset',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.3,
      },
      {
        label: 'Second dataset',
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: '#742774',
        lineTension: 0.3,
      },
    ],
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
