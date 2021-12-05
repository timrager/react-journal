import React from 'react';
import Header from './Header';
import Card from './Card';
import './data.js';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Card />
    </div>
  )
}

export default App;


// Data array: Title, Location, Google Maps link, Start Date, End Date, Description, Image URL