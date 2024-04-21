import {BrowserRouter,} from 'react-router-dom'
import RoutesApp from './web/routes/Routes';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    </div>
  );
}

export default App
