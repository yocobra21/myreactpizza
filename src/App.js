import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

import { connect } from 'react-redux';

import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas';

function App(props) {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      store.dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
