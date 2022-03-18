import './navbar.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneIcon from '@mui/icons-material/Tune';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <SearchOutlinedIcon className='icon' />
          <input type='text' placeholder='Search for stats' />
        </div>

        <div className='header'>
          <div className='text'>
            <div className='name'>Hello Joe</div>
            <p className='welcome'>Welcome Back!</p>
          </div>
          <div className='filter'>
            Filters
            <TuneIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
