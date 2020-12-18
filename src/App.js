import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import AddStudent from './pages/AddStudent';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import React from 'react'
import User from './pages/User';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><User /></Route>
            <Route exact path="/addstudent"><AddStudent /></Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
