import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboad';
import Login from './components/Loginpage/login';
import Loading from './pages/Loading';

const AppRouter = () => (
    <BrowserRouter>
        <div>

            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/home" component={Dashboard} />
                <Route path="/loading" component={Loading} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
