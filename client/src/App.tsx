import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './pages/About';
import Advisors from './pages/Advisor';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login-componenets/login';
import Signup from './pages/Signup-componenets/signup';

class App extends React.Component {
  public componentWillMount() {
    fetch("http://localhost:8000/");
    fetch("http://localhost:8000/auth", {
      credentials: 'include',
      method:"POST",
    }).then((res: Response) => {
      // tslint:disable-next-line:no-console
      console.log(res);
      // tslint:disable-next-line:no-console
      console.log("trying auth");
      fetch("http://localhost:8000/auth", {
        credentials: 'include'
      });
    })
  }

  public render() {
    return (
        <div>
          <Navbar />
            <Switch>
              <Route path='/signup' component={Signup}/>
              <Route path='/login' component={Login}/>
              <Route path='/advisors' component={Advisors}/>
              <Route path='/about' component={About}/>
              <Route path='/' component={HomeScreen}/>
            </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;
