import React, {Fragment} from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import {history} from './history';
import routes from '../Config/routes';

const Routes = () => {
    return (
        <Fragment>
            <Router basename="/" history={history}>
                <Switch>
                    {routes.map((route, key) => {
                        return (
                        <Route 
                            key={key}
                            path={route.path}
                            exact={route.exact}
                            component={route.component} />
                        )}
                    )}
                </Switch>
            </Router>
        </Fragment>
    );
};

export default Routes;