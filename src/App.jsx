import React, { useState } from 'react';
import './App.css';

const moods = [
  { name: 'Happy', verse: 'Rejoice in the Lord always.', reference: 'Philippians 4:4' },
  { name: 'Sad', verse: 'The Lord is near to the brokenhearted.', reference: 'Psalm 34:18' },
  { name: 'Angry', verse: 'Be angry and do not sin.', reference: 'Ephesians 4:26' },
  { name: 'Fearful', verse: 'Fear not, for I am with you.', reference: 'Isaiah 41:10' },
  { name: 'Grateful', verse: 'Give thanks to the Lord, for he is good.', reference: 'Psalm 107:1' },
  { name: 'Excited', verse: 'The joy of the Lord is your strength.', reference: 'Nehemiah 8:10' },
  { name: 'Tired', verse: 'Come to me, all you who are weary.', reference: 'Matthew 11:28' },
  { name: 'Stressed', verse: 'Cast all your anxiety on him.', reference: '1 Peter 5:7' },
  { name: 'Hopeful', verse: 'For I know the plans I have for you.', reference: 'Jeremiah 29:11' },
  { name: 'Lonely', verse: 'You are not alone, for I am with you.', reference: 'Deuteronomy 31:6' },
  { name: 'Confused', verse: 'Trust in the Lord with all your heart.', reference: 'Proverbs 3:5' },
  { name: 'Overwhelmed', verse: 'My grace is sufficient for you.', reference: '2 Corinthians 12:9' },
];

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <h1>Mood Tiles</h1>
      <div className="mood-tiles">
        {moods.map((mood) => (
          <div key={mood.name} className="mood-tile" onClick={() => handleMoodClick(mood)}>
            {mood.name}
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedMood.name}</h2>
            <p>{selectedMood.verse}</p>
            <p>{selectedMood.reference}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
