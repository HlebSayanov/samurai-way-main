import React from 'react';

import './index.css';

import state, {addPostBtn, RootStateType, subscriber, updateAddPost} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {renderTree} from "./render";




renderTree()

subscriber(renderTree)
