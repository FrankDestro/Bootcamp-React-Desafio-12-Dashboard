import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'Components/Navbar';
import Filter from 'Components/Filter';
import PieChartCard from 'Components/Pie-chart-card';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Filter />
        <PieChartCard />
      </div>
    </>
  );
}

export default App;
