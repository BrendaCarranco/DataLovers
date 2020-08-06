import React, { Fragment, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; import './App.css';
import Index from './components/index/Index';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Graph from './components/showData/Graph';
import TableInfo from './components/showData/graphOptions/Table';
import Map from './components/showData/graphOptions/Map';

function App() {

  const [medio, setMedio] = useState(null);
  const [pic, setPic] = useState('');

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/test' component={Map} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' render={() => <Dashboard medio={medio} setMedio={setMedio} setPic={setPic} />} />
          <Route path='/data' render={() => <Graph pic={pic} medio={medio} />} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
