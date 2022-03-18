import './sidebar.scss';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <div className='first-row'>
          <div className='dot' />
          <div className='dot' />
        </div>
        <div className='second-row'>
          <div className='dot' />
          <div className='dot' />
        </div>
      </div>

      <div className='bottom'>
        <ul>
          <li>
            <HomeRoundedIcon className='icon' />
            <span className='title'>Home</span>
          </li>

          <li>
            <EmojiEventsOutlinedIcon className='icon' />
            <span className='title'>Projects</span>
          </li>

          <li>
            <AccountBalanceOutlinedIcon className='icon' />
            <span className='title'>Billings</span>
          </li>

          <li>
            <PermIdentityOutlinedIcon className='icon' />
            <span className='title'>Team Members</span>
          </li>

          <li>
            <BarChartOutlinedIcon className='icon' />
            <span className='title'>Stats</span>
          </li>

          <li>
            <SettingsOutlinedIcon className='icon' />
            <p className='title'>Settings</p>
          </li>
        </ul>
      </div>

      <div className='space'></div>

      <div className='profile'>
        <div className='avatarBox'>
          <img
            src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt=''
            className='avatar'
          />
          <div className='notificationCircle'></div>
        </div>
        <p className='name'>Joe Pass</p>
      </div>
    </div>
  );
};

export default Sidebar;
