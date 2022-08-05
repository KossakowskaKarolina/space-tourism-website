import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import Destination from './components/views/Destination/Destination';
import Crew from './components/views/Crew/Crew';
import Technology from './components/views/Technology/Technology';
import NotFound from './components/views/NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/destination' element={<Destination />} />
      <Route exact path='/crew' element={<Crew/>} />
      <Route exact path='/technology' element={<Technology />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App