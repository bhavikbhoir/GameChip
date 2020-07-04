import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import  Footer  from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { Research } from './Research';
import { About } from './About';
import { Features } from './Features';
import { Form } from './Form';


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Features" component={Features} />
            <Route exact path="/Research" component={Research} />
            <Route exact path="/Form" component={Form} />
            </Switch>
          </Router>
        <Footer />  
      </React.Fragment>
  );  
  }
  
}

export default App;
