import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoggedIn from './screens/LoggedIn';
import LoggedOut from './screens/LoggedOut';

function App() {

  const [ showSideDrawer, setShowSideDrawer ] = useState(false)
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <Router>
      <Navbar setShowSideDrawer={setShowSideDrawer} loggedIn={loggedIn}/>
      <SideDrawer visible={showSideDrawer} setVisible={setShowSideDrawer}> 
        <main>
          <Switch>
            <Route exact path="/home" component={HomeScreen}/>
            <Route exact path="/product" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
      </SideDrawer> 

    </Router>
  );
}

export default App;
