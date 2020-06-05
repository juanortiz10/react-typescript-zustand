import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import UserDetail from './views/UserDetail';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user-detail/:userId">
        <UserDetail />
      </Route>
    </Router>
  );
}

export default App;
