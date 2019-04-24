import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './pages/Dashboad';
import appHeader from './components/Appheader'

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/home" component={Dashboard} />

            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
