import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import HomeScreen from './pages/HomeScreen';

class App extends React.Component {
  public render() {
    return (
        <div>
          <Navbar />
            <Switch>
              <Route path='/' component={HomeScreen}/>
            </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
