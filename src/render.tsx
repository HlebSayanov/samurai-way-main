 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPostBtn, RootStateType, updateAddPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                // postPage={state.postPage}
                //  dialogPage={state.dialogPage}
                 addPost={addPostBtn}
                 updateAddPost={updateAddPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
