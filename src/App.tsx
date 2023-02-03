import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppType = {
    store: StoreType

}

const App = (props: AppType) => {


    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile
                   store={props.store}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}
                                                                dispatchDialogPage={props.store.dispatch.bind(props.store)}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>


        </div>


    );
}

export default App;
