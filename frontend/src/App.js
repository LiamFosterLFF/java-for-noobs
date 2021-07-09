import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
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

  const [ products, setProducts ] = useState([]);
  const [ showSideDrawer, setShowSideDrawer ] = useState(false)
  const [ loggedIn, setLoggedIn ] = useState(false)

  useEffect(() => {
      axios.get("/api/products").then(response => {
        setProducts(response.data)
      })
  }, []);
  console.log(products);
  

  
  return (
    <Router>
      <Navbar setShowSideDrawer={setShowSideDrawer} loggedIn={loggedIn}/>
      <SideDrawer visible={showSideDrawer} setVisible={setShowSideDrawer}> 
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + "/bean.png"} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
