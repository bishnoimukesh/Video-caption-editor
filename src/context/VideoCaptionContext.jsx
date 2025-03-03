import { createContext, useState, useRef, useContext } from 'react';

const VideoCaptionContext = createContext();

export const VideoCaptionProvider = ({ children }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState('');
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [newCaptionText, setNewCaptionText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const videoRef = useRef(null);

  const handleUrlChange = (url) => setVideoUrl(url);

  const handleCaptionsChange = (updatedCaptions) => setCaptions(updatedCaptions);

  const handleEditCaption = ({ text, start, end, index }) => {
    setNewCaptionText(text);
    setStartTime(start);
    setEndTime(end);
    setEditingIndex(index);
  };

  return (
    <VideoCaptionContext.Provider
      value={{
        videoUrl,
        setVideoUrl: handleUrlChange,
        captions,
        setCaptions: handleCaptionsChange,
        currentCaption,
        setCurrentCaption,
        videoRef,
        handleEditCaption,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        newCaptionText,
        setNewCaptionText,
        editingIndex,
        setEditingIndex,
      }}
    >
      {children}
    </VideoCaptionContext.Provider>
  );
};

export const useVideoCaption = () => useContext(VideoCaptionContext);