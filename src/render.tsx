import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, RootStateType, updateAddPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";



export const renderTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App postPage={state.postPage}
                 dialogPage={state.dialogPage}
                 addPost={addPost}
                 updateAddPost={updateAddPost}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
