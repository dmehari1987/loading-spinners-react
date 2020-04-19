import React from 'react';
import {BounceLoader, BeatLoader, BarLoader } from 'react-spinners';
import { css } from '@emotion/core';
import './App.css';

const loaderCSS= css`
margine-top: 25px;
margine-bottom: 25px;
`

function App() {
  return (
    <div className="App">
      < BounceLoader css= {loaderCSS} size= {24} color= 'red' loading />
      <BarLoader css= {loaderCSS} size= {48} color= 'orange' loading />
      <BeatLoader css= {loaderCSS} size= {72} color= 'maroon' loading />
    </div>
  );
}

export default App;
