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
import state, {addPostBtn, DialogDataType, PostDataType, RootStateType, updateAddPost} from "./redux/state"


type AppType = {
    // postPage: PostDataType
    // dialogPage: DialogDataType
    state:RootStateType
    addPost: (valuePost: string) => void
    updateAddPost:(valueEvent:string) =>void

}

const App = (props: AppType) => {


    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile
                    newPostText={props.state.postPage.newPostText}
                    postPage={props.state.postPage.posts}
                    addPost={props.addPost}
                    updateAddPost={props.updateAddPost}


                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogPage.dialogs}
                                                                messages={props.state.dialogPage.messages}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>


        </div>


    );
}

export default App;
