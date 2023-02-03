 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
 import {store} from "./redux/state";




export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>

               <App store={store}
                   // addPost={store.addPostBtn.bind(store._state)}
                   // updateAddPost={store.updateAddPost.bind(store._state)}
               />


        </BrowserRouter>,
        document.getElementById('root')
    );
}
