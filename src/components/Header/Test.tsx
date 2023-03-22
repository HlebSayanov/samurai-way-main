import React from "react";
import {AuthType, getAuthThunkCreator, setAuthForUser} from "../../redux/auth-reducer";
import axios from "axios";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {HeaderContainer} from "./HeaderContainer";
import {Dispatch} from "redux";



export type PropsTypeHeader =MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean | undefined
    login:string | null
}
type MapDispatchToPropsType = {
    setAuthForUser: (id: number, login: string, email: string) => void
    getAuthThunkCreator : () =>void

}


const mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
}

    export const Test = connect(mapStateToProps,{setAuthForUser,getAuthThunkCreator})(HeaderContainer)

