import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import AddScorePopup from './components/AddScorePopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <Leaderboard />
      <button onClick={() => setShowPopup(true)}>Add Score</button>
      {showPopup && <AddScorePopup closePopup={() => setShowPopup(false)} />}
      <Footer />
    </div>
  );
};

export default App;
