import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { storeRedux} from "./redux/store-redux";
import { Provider } from 'react-redux';





export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={storeRedux}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


renderTree()
storeRedux.subscribe(()=>{
    renderTree()
})

