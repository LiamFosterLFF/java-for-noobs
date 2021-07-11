import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Screens
import HomeScreen from './components/screens/HomeScreen';
import ProductsScreen from './components/screens/ProductsScreen';
import ProductDetailsScreen from './components/screens/ProductDetailsScreen';
import CartScreen from './components/screens/CartScreen';
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import PaymentScreen from './components/screens/PaymentScreen';

function App() {

  const [ showSideDrawer, setShowSideDrawer ] = useState(false)
  const [ loggedIn, setLoggedIn ] = useState(false)

  return (
    <Router>
      <Navbar setShowSideDrawer={setShowSideDrawer} loggedIn={loggedIn}/>
      <SideDrawer visible={showSideDrawer} setVisible={setShowSideDrawer}> 
        <main>
          <Switch>
            <PrivateRoute exact path='/' component={PrivateScreen}/>
            <Route exact path="/home" component={HomeScreen}/>
            <Route exact path="/products" component={ProductsScreen}/>
            <Route exact path="/productDetails/:id" component={ProductDetailsScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/register" component={RegisterScreen}/>
            <Route exact path="/forgotPassword" component={ForgotPasswordScreen}/>
            <Route exact path="/resetPassword/:resetToken" component={ResetPasswordScreen}/>
            <Route exact path="/payment" component={PaymentScreen}/>

          </Switch>
        </main>
      </SideDrawer> 

    </Router>
  );
}

export default App;
