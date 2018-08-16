import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerEdit from './components/CustomerEdit';

class App extends Component {
  renderDummyC = () => ("dummy render")
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route path="/customers/new" component={this.renderDummyC} />
            <Route path="/customers/:id" component={this.renderDummyC} />
            <Route path="/customers/:id/edit" component={CustomerEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
