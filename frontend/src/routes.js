import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import NewCard from './pages/NewCard';
import Card from './pages/Card';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contacts/new" component={NewCard} />
            <Route path="/profile/contacts" component={Card} />
        </Switch>
        </BrowserRouter>
    );
}