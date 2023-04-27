import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import { storeRedux} from "./redux/store-redux";
import { Provider } from 'react-redux';
import App from "./App";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={storeRedux}>
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
