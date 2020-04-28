import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Logo from './components/UI/Logo';
import Navbar from './components/UI/Navbar';
import nintendoSvg from './nintendo.svg';
import ListItem from './components/UI/ListItem';
import Item from './components/UI/Item';
import NLink from './components/UI/NavLink';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NoMatch from './components/pages/NoMatch';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <Router>
    <div>
      <Header>
          <Navigation>
              <NLink to="/">
                <Logo imageUrl={nintendoSvg} alt="My store games" />
              </NLink>
              <Navbar>
                  <ListItem>
                    <Item><NLink exact to="/">Home</NLink></Item>
                    <Item><NLink to="/products">Products</NLink></Item>
                    <Item><NLink to="/about">About</NLink></Item>
                    <Item><NLink to="/contact">Contact</NLink></Item>
                  </ListItem>
              </Navbar>
          </Navigation>
      </Header>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
