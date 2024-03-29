import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducer';

const middlewares = [
    thunk
];

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store;