import React from 'react';
import '../scss/Navigation.scss';
import logo from '../Assets/linkedin.png';
import { FaHome } from 'react-icons/fa';
import {
  BsFillPeopleFill,
  BsFillBriefcaseFill,
  BsGrid3X3GapFill,
} from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav-search-wrap'>
        <img src={logo} alt='' />
        <div className='nav-input-wrapper'>
          <BiSearchAlt2 className='nav-search-icon' />
          <input type='text' className='core-input nav-input' />
        </div>
      </div>

      <div className='nav-pages'>
        <div className='pages-icon-wrap'>
          <FaHome className='pages-icon' />
          <span>Home</span>  
        </div>
        <div className='pages-icon-wrap'>
          <BsFillPeopleFill className='pages-icon' />
          <span>Network</span>
        </div>
        <div className='pages-icon-wrap'>
          <BsFillBriefcaseFill className='pages-icon' />
          <span>Jobs</span>
        </div>
        <div className='pages-icon-wrap'>
          <MdMessage className='pages-icon' />
          <span>Messages</span>
        </div>
        <div className='pages-icon-wrap'>
          <IoMdNotifications className='pages-icon' />
          <span>Notifications</span>
        </div>
        <div className='pages-icon-wrap profile'>
          <img src={logo} alt='' />
          <span>Me</span>
        </div>
        <div className='nav-divider'></div>
        <div className='pages-icon-wrap'>
          <BsGrid3X3GapFill className='pages-icon' />
          <span>Notifications</span>
        </div>
        <div className='para-wrapper'>
          <span>Get Hired Faster,</span> <span>Try Premium Free</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
