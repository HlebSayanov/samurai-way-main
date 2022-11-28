import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import state, {DialogDataType, PostDataType, RootStateType} from "./redux/state"


type AppType={
    postPage:PostDataType
    dialogPage:DialogDataType

}

const App = (props:AppType) => {



    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile postPage={props.postPage.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogPage.dialogs} messages={props.dialogPage.messages}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
