import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/topicpage/topicpage.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
 
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}


//changes to check branch merging 
export default App;
