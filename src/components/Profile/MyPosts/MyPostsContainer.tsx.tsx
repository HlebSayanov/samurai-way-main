import React from "react";
import {PostType} from "../../../redux/state";
import {addPostAC} from "../../../redux/profiles-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/store-redux";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type mapStateToPropsType = {
    posts:PostType[]
}
export type mapDispatchToPropsType ={
    OnClickAddText: (value: string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.profiles.posts

    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        OnClickAddText: (value: string) => {
            dispatch(addPostAC(value))
        },

    }
}
    export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
