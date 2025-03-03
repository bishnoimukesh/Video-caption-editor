import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import VideoUrlForm from './components/VideoUrlForm';
import CaptionForm from './components/CaptionForm';
import CaptionList from './components/CaptionList';
import { VideoCaptionProvider } from './context/VideoCaptionContext';

const App = () => (
  <VideoCaptionProvider>
    <div className="App">
      <h1>Video Caption Editor</h1>
      <VideoUrlForm />
      <VideoPlayer />
      <CaptionForm />
      <CaptionList />
    </div>
  </VideoCaptionProvider>
);

export default App;