import React from "react";
import {AuthType, setAuthForUser} from "../../redux/auth-reducer";
import axios from "axios";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {HeaderContainer} from "./HeaderContainer";



export type PropsTypeHeader =MapStateToPropsType & MapDispathToPropsType

type MapStateToPropsType = {
    isAuth: boolean | undefined
    login:string | null
}
type MapDispathToPropsType = {
    setAuthForUser: (id: number, login: string, email: string) => void

}


const mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
}

    export const Test = connect(mapStateToProps,{setAuthForUser})(HeaderContainer)

