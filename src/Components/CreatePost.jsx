import React from 'react';
import logo from '../Assets/linkedin.png';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsCameraVideoOff, BsCalendar2Event } from 'react-icons/bs';
import { MdOutlineArticle } from 'react-icons/md';
import '../scss/CreatePost.scss';
const CreatePost = () => {
  return (
    <div className='create-post'>
      <div className='create-post-input'>
        <div className='create-post-image'>
          <img src={logo} alt='' />
        </div>
        <input type='text' className='core-input input' placeholder="Start a post"/>
      </div>
      <div className='create-post-options'>
        <div className='option'>
          <HiOutlinePhotograph style={{ color: '#70b5f9' }} />
          <span>Photo</span>
        </div>

        <div className='option'>
          <BsCameraVideoOff style={{ color: '#7fc15e' }} />
          <span>Video</span>
        </div>
        <div className='option'>
          <BsCalendar2Event style={{ color: '#e7a33e' }} />
          <span>Event</span>
        </div>
        <div className='option'>
          <MdOutlineArticle style={{ color: '#fc9295' }} />
          <span>Write Acticle</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreatePost;
