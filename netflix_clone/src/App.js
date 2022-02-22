import './App.css';
import './normalize.css';

import Navigation from './components/Navigation/index';
import Billboard from './components/Billboard/index';
import Titles from './components/Titles/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Billboard />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
