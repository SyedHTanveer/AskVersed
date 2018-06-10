import * as React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import Navbar from './navbar';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <div className="shift-nav">
        <HomeScreen />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
