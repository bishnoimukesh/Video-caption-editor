import { useState, useEffect } from 'react';
import { useVideoCaption } from '../context/VideoCaptionContext';

const VideoPlayer = () => {
  const { videoUrl, captions, setCurrentCaption, videoRef } = useVideoCaption();
  const [localCurrentCaption, setLocalCurrentCaption] = useState('');

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const activeCaption = captions.find(
      cap => currentTime >= cap.start && currentTime <= cap.end
    );
    setLocalCurrentCaption(activeCaption ? activeCaption.text : '');
    setCurrentCaption(activeCaption ? activeCaption.text : '');
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    setLocalCurrentCaption('');
  }, [videoUrl]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        controls
        onClick={togglePlayPause}
      >
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      <div className="caption-overlay">
        {localCurrentCaption && <span className="caption">{localCurrentCaption}</span>}
      </div>
    </div>
  );
};

export default VideoPlayer;