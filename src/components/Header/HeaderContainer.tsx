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
        // authAPI.getAuth()
        //     .then(data => {
        //         let{id,login,email}=data
        //         this.props.setAuthForUser(id,login,email)
        //     })
    }

    render() {
        console.log(this.props.isAuth)
        return <Header login={this.props.login} isAuth={this.props.isAuth}  />;
    }
}

// export type PropsTypeHeader =MapStateToPropsType & MapDispathToPropsType
//
// type MapStateToPropsType = {
//     auth:AuthType
// }
// type MapDispathToPropsType = {
//     setAuthForUser: (id: number, login: string, email: string) => void
//
// }
//
//
// const mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
//     return {
//         auth: state.auth
//     }
// }
//
//     export const Test = connect(mapStateToProps,{setAuthForUser})(HeaderContainer)
//
