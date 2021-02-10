import React from 'react';
import './App.css';
import TypeAhead from './typeahead';
import useSWR from 'swr';
import axios from 'axios';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TypeAhead
        />
      </div>
    );
  }
}

export default App;
