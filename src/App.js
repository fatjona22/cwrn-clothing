import React from "react";
import "./App.css";
import { Switch, Route } from 'react-router-dom';

import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/topicpage/topicpage.component";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );}
}

export default App;
