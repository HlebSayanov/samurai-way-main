import React from "react";
import {AuthType, getAuthThunkCreator, logOutTC, setAuthForUser} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {connect} from "react-redux";

import {Header} from "./Header";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthForUser: (id: number, login: string, email: string) => void
    logOutTC: () => void

}
export type PropsTypeHeader = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<PropsTypeHeader, AuthType> {



    render() {

        return <Header login={this.props.login} isAuth={this.props.isAuth} logOut={this.props.logOutTC}/>;
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthForUser, logOutTC})(HeaderContainer)

