import React from 'react';
import { Link } from 'react-router-dom';

const allVideos = [
  "https://www.youtube.com/embed/crOfgrD_aGM",
  "https://www.youtube.com/embed/R1PMxJgJ9fU",
  "https://www.youtube.com/embed/7EwZCjU2Vg4",
  "https://www.youtube.com/embed/bNkv8UfJPFI",
  "https://www.youtube.com/embed/uYmnw4WGxjU",
  "https://www.youtube.com/embed/WWF-aAJbblY",
  "https://www.youtube.com/embed/_15G6GGz-qE",
  "https://www.youtube.com/embed/SldlN_HjYsg",
  "https://www.youtube.com/embed/FOnJKjL1mIc",
  "https://www.youtube.com/embed/aYF8B1E_VRE"
];

const AllVideos = () => {
  return (
    <div>
      <h1>All Videos</h1>
      <div className="videos-container">
        {allVideos.map((video, index) => (
          <div key={index} className="video-box">
            <iframe 
              width="100%" 
              height="100%" 
              src={video} 
              title={`Video ${index + 1}`} 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Go Back to Homepage</Link>
    </div>
  );
};

export default AllVideos;
