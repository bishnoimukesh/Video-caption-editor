import React from 'react';
import { useVideoCaption } from '../context/VideoCaptionContext';

const CaptionList = () => {
  const { captions, setCaptions, handleEditCaption } = useVideoCaption();

  const editCaption = (index) => {
    const caption = captions[index];
    handleEditCaption({
      text: caption.text,
      start: caption.start,
      end: caption.end,
      index
    });
  };

  const deleteCaption = (index) => {
    const updatedCaptions = captions.filter((_, i) => i !== index);
    setCaptions(updatedCaptions);
  };

  return (
    <div className="caption-list">
      <h3>Captions</h3>
      <ul>
        {captions.map((cap, index) => (
          <li key={index}>
            {cap.start}s - {cap.end}s: {cap.text}
            <button 
              onClick={() => editCaption(index)}
              className="edit-button"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteCaption(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaptionList;