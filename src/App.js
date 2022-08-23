import React from 'react';
import './App.css';
import CompanyName from './components/CompanyName';
// eslint-disable-next-line import/no-named-as-default
import CatCardRow from './components/CatCardRow';

const catImageOne = require('./assets/cat_one.jpg');
const catImageTwo = require('./assets/cat_two.jpg');
const catImageThree = require('./assets/cat_three.jpg');

function App() {
  return (
    <div className="App">
      <CompanyName />
      <CatCardRow
        catImageOne={catImageOne}
        catImageTwo={catImageTwo}
        catImageThree={catImageThree}
      />
    </div>
  );
}

export default App;
