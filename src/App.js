import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerEdit from './components/CustomerEdit';
import SingleCustomerContainer from './containers/SingleCustomerContainer'

class App extends Component {
  renderDummyC = () => ("dummy render")
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customer/new" component={SingleCustomerContainer} />
            <Route path="/customer/:dni" render={props => <SingleCustomerContainer dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
