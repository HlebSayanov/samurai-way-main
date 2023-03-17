import React from "react";
import {AuthType, setAuthForUser} from "../../redux/auth-reducer";
import axios from "axios";
import {Header} from "./Header";
import {AppStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router-dom";
import {PropsTypeHeader} from "./Test";


export class HeaderContainer extends React.Component<PropsTypeHeader, AuthType>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        })
            .then(response => {
                let{id,login,email}=response.data.data
                this.props.setAuthForUser(id,login,email)
            })
    }

    render() {
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
