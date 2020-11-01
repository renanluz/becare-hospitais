import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Hospitals from './pages/Hospitals';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} /> 
                <Route path="/app" component={Hospitals} />
            </Switch>    
        </BrowserRouter>
    );
}

export default Routes;