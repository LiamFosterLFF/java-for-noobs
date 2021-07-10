import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import CartScreen from './screens/CartScreen';
import LogInOut from './screens/LogInOut';

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
            <Route exact path="/products" component={ProductsScreen}/>
            <Route exact path="/productDetails/:id" component={ProductDetailsScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
            <Route exact path="/loginout" component={LogInOut} loggedIn={loggedIn}/>
          </Switch>
        </main>
      </SideDrawer> 

    </Router>
  );
}

export default App;
