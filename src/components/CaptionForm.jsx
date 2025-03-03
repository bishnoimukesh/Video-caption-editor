import { useVideoCaption } from '../context/VideoCaptionContext';

const CaptionForm = () => {
  const { 
    captions, 
    setCaptions, 
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    newCaptionText,
    setNewCaptionText,
    editingIndex,
    setEditingIndex
  } = useVideoCaption();

  const handleCaptionSubmit = (e) => {
    e.preventDefault();
    if (newCaptionText && startTime >= 0 && endTime > startTime) {
      let updatedCaptions;
      if (editingIndex !== null) {
        updatedCaptions = [...captions];
        updatedCaptions[editingIndex] = {
          text: newCaptionText,
          start: startTime,
          end: endTime
        };
      } else {
        updatedCaptions = [...captions, { 
          text: newCaptionText, 
          start: startTime,
          end: endTime 
        }];
      }
      setCaptions(updatedCaptions);
      setNewCaptionText('');
      setStartTime(0);
      setEndTime(0);
      setEditingIndex(null);
    }
  };

  return (
    <form onSubmit={handleCaptionSubmit} className="caption-form">
      <input
        type="number"
        value={startTime}
        onChange={(e) => setStartTime(parseFloat(e.target.value))}
        placeholder="Start time (s)"
        min="0"
      />
      <input
        type="number"
        value={endTime}
        onChange={(e) => setEndTime(parseFloat(e.target.value))}
        placeholder="End time (s)"
        min={startTime}
      />
      <input
        type="text"
        value={newCaptionText}
        onChange={(e) => setNewCaptionText(e.target.value)}
        placeholder="Enter caption text"
      />
      <button type="submit">
        {editingIndex !== null ? 'Update Caption' : 'Add Caption'}
      </button>
    </form>
  );
};

export default CaptionForm;