import React from "react";
import {AuthType, setAuthForUser} from "../../redux/auth-reducer";
import axios from "axios";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {PropsTypeHeader} from "./Test";
import {authAPI} from "../../api/api";


export class HeaderContainer extends React.Component<PropsTypeHeader, AuthType>{

    componentDidMount() {
        this.props.getAuthThunkCreator()
    }

    render() {
        console.log(this.props.isAuth)
        return <Header login={this.props.login} isAuth={this.props.isAuth}  />;
    }
}


