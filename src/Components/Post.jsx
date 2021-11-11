import React from 'react';
import '../scss/Post.scss';
import { BsThreeDots } from 'react-icons/bs';
import logo from '../Assets/linkedin.png';
import { FaGlobeAmericas } from 'react-icons/fa';
import {
  AiOutlineLike,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Post = () => {
  return (
    <div className='post'>
      <div className='post-pretitle'>
        <div className='post-pretitle-text'>
          <span>Shripad </span>likes this
        </div>
        <BsThreeDots />
      </div>
      <hr />
      <div className='post-title'>
        <div className='post-image'>
          <img src={logo} alt='' />
        </div>
        <div className='post-title-name'>
          <span className='post-title-bold'>Shripad Vantmuri</span>
          <span>Software Engineer at VCTI</span>
          <div className='post-activity-nest'>
            <span>11h</span>
            <span>Edited</span>
            <FaGlobeAmericas />
          </div>
        </div>
      </div>
      <div className='post-info'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          adipisci at enim voluptatem ipsam a. Numquam ex provident aliquam ea,
          hic corrupti maxime accusantium, eius, animi aperiam quasi earum
          atque.
        </p>
        <img src={logo} alt='' />
      </div>
      <div className='post-activity'>
        <AiOutlineLike className='icons' />
        <AiOutlineHeart className='icons' />
        <span>1234</span>
        <span>2345 comments</span>
      </div>
      <hr />
      <div className='post-options'>
        <div className='option'>
          <AiOutlineLike style={{ color: '#70b5f9' }} />
          <span>Likes</span>
        </div>

        <div className='option'>
          <FaRegCommentDots style={{ color: '#7fc15e' }} />
          <span>Comments</span>
        </div>
        <div className='option'>
          <AiOutlineShareAlt style={{ color: '#e7a33e' }} />
          <span>Share</span>
        </div>
        <div className='option'>
          <FiSend style={{ color: '#fc9295' }} />
          <span>Send</span>
        </div>
        <div></div>
      </div>
      <div className='post-input'>
        <div className='post-image'>
          <img src={logo} alt='' />
        </div>
        <input
          type='text'
          className='core-input input'
          placeholder='Start a post'
        />
      </div>
      <div className='post-comment'>
        <div className='post-image'>
          <img src={logo} alt='' />
        </div>
        <div className='comment'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            laudantium temporibus. Ipsum culpa impedit eveniet maxime ullam fuga
            officia doloribus!
          </p>
          <div className='active'>
            <span>Like</span>
            <span>Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
