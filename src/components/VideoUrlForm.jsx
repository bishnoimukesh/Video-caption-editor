import {useState} from 'react';
import { useVideoCaption } from '../context/VideoCaptionContext';

const VideoUrlForm = () => {
  const { videoRef, setVideoUrl } = useVideoCaption();
  const [localVideoUrl, setLocalVideoUrl] = useState('');

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (localVideoUrl) {
      videoRef.current.load();
      setVideoUrl(localVideoUrl);
    }
  };

  return (
    <form onSubmit={handleUrlSubmit}>
      <input
        type="url"
        value={localVideoUrl}
        onChange={(e) => setLocalVideoUrl(e.target.value)}
        placeholder="Enter video URL"
        className="url-input"
      />
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoUrlForm;