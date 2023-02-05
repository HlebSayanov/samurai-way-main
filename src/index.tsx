import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { storeRedux} from "./redux/store-redux";
import StoreContext, { Provider } from "./storeContext";
import {RootStateType, store, StoreType} from "./redux/state";




export const renderTree = () => {
    // let state = storeRedux.getState().dialogs
    console.log(storeRedux, "STATE")
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

// renderTree(storeRedux.getState())
// storeRedux.subscribe(()=>{
//     let state = storeRedux.getState().dialogs
//     renderTree(state)
// })
