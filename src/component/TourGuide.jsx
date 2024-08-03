// TourGuide.jsx
import React, { useState } from 'react';
import './TourGuide.css';
import DetailPage from './DetailPage';

function TourGuide() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleGuideClick = (id) => {
    setSelectedGuide(id);
  };

  const goBack = () => {
    setSelectedGuide(null);
  };

  if (selectedGuide) {
    return <DetailPage id={selectedGuide} goBack={goBack} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading'><b>Tour Guide</b></h1>
        <p className='p'><b>FIND A LOCAL TO SHOW YOU AROUND MALAYSIA</b></p>
      </header>
      <p className='roundbox'>Press the tour guide profile to know more</p>
      <div className="gallery">
        <div className="row">
          <img src="../public/TourGuide/4.png" alt="Image 1" onClick={() => handleGuideClick(1)} />
          <img src="../public/TourGuide/2.png" alt="Image 2" onClick={() => handleGuideClick(2)} />
        </div>
        <div className="row">
          <img src="../public/TourGuide/3.png" alt="Image 3" onClick={() => handleGuideClick(3)} />
          <img src="../public/TourGuide/1.png" alt="Image 4" onClick={() => handleGuideClick(4)} />
        </div>
        <div className="row">
          <img src="../public/TourGuide/5.png" alt="Image 5" onClick={() => handleGuideClick(5)} />
          <img src="../public/TourGuide/6.png" alt="Image 6" onClick={() => handleGuideClick(6)} />
        </div>
      </div>
    </div>
  );
}

export default TourGuide;
