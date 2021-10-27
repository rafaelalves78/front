import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateAd from '../Pages/CreateAd';
import Home from '../Pages/Home';
import View from '../Pages/View';
import ViewPost from '../Pages/ViewPost';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup'

export default function Routes() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/login">
        <Login  />
      </Route>    
      <Route path="/create">
        <CreateAd />  
      </Route> 
      <Route path="/view">
        <View/>
      </Route>
      <Route path="/viewPost">
        <ViewPost/>
      </Route>
    </Router>
  )
}