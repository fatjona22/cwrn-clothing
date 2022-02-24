import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/topicpage/topicpage.component";
import Header from "./components/header/header.component.jsx";
 
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
