import React from 'react';
import { Link } from 'react-router-dom';
import './AllTemplates.css';



import image3 from './Images/1.jpg';
import image4 from './Images/2.jpg';
import image5 from './Images/3.jpg';
import image6 from './Images/4.jpg';
import image7 from './Images/1.jpg';
import image8 from './Images/2.jpg';
import image1 from './Images/3.jpg';
import image2 from './Images/4.jpg';

const AllImages = () => {
  return (
    <div>
      <h1>All Images</h1>
      <div className="images-container">
        <div className="image-box">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="image-box">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="image-box">
          <img src={image3} alt="Image 3" />
        </div>
        <div className="image-box">
          <img src={image4} alt="Image 4" />
        </div>
        <div className="image-box">
          <img src={image5} alt="Image 5" />
        </div>
        <div className="image-box">
          <img src={image6} alt="Image 6" />
        </div>
        <div className="image-box">
          <img src={image7} alt="Image 7" />
        </div>
        <div className="image-box">
          <img src={image8} alt="Image 8" />
        </div>
      </div>
      <Link to="/" className="back-button">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default AllImages;

