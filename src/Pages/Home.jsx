import React from 'react';
import Navigation from '../Components/Navigation';
import '../scss/Home.scss';
import CreatePost from '../Components/CreatePost';
import Post from '../Components/Post';

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className='home-body'>
        <CreatePost />
        <Post />
      </div>
    </div>
  );
};

export default Home;
