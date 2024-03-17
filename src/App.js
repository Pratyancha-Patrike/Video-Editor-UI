import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AllTemplates from './AllTemplates'
import AllVideos from './AllVideos';
import VideoEditingPage from './VideoEditingPage';


const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
         
            <Route path="/" element={<Dashboard  />} />
            <Route path="/dashboard/all-templates" element={<AllTemplates />} />
            <Route path="/dashboard/all-videos" element={<AllVideos />} /> 
            <Route path="/dashboard/video-editing-page" element={<VideoEditingPage/>} />

            
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
