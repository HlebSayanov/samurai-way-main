import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";

import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import WithUrlDataContainerComponent, {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Test} from "./components/Header/Test";
import Login from "./components/Login/Login";
import {Dialogs} from "./components/Dialogs/Dialogs";



const App = () => {


    return (

        <div className={'app-wrapper'}>
            <Test/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() => <WithUrlDataContainerComponent/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/login'} render={() => <Login/>}/>

            </div>


        </div>


    );
}

export default App;
