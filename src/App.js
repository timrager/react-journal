import React from 'react';
import Header from './Header';
import Card from './Card';
import tripData from './data.js';

const App = () => {

  const allTrips = tripData.map( trip => {
    return(
      <Card key={trip.id} {...trip} />
      )
  })

  return (
    <div className="container">
      <Header />
      {allTrips}
    </div>
  )
}

export default App;


// Data array: Title, Location, Google Maps link, Start Date, End Date, Description, Image URL