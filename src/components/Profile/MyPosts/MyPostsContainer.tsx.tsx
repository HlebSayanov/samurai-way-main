import React, {ChangeEvent, useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";
import {PostType, StoreType} from "../../../redux/state";
import {ActionsTypesProfiles, addPostAC, updateAddPostAC} from "../../../redux/profilesReducer";
import {MyPosts} from "./MyPosts";




export type MyPostsContaineType = {
    store:StoreType


    // postPage:PostType[]
    // // addPost: (valuePost: string) => void
    // newPostText: string
    // // updateAddPost: (valueEvent: string) => void
     dispatch:(action:ActionsTypesProfiles)=>void
}


export const MyPostsContainer = (props: MyPostsContaineType) => {


    const posts= props.store.getState().postPage.posts           // render posts
    const newPostText = props.store.getState().postPage.newPostText     //  наши новые сообщение

    // / const textARef = React.createRef<HTMLTextAreaElement>()   // input(textaree) enter for keys

    const OnClickAddText = (value:string) => {
        props.dispatch(addPostAC(value))                // через пропсы принимаем с myPost
        }
       const onChangeHandlerAddText = (value:string) => {               //  аналогично
        props.dispatch(updateAddPostAC(value))
       }


    return (
        <>

            <MyPosts posts={posts}
                     newPostText={newPostText}
                     onChangeHandlerAddText={onChangeHandlerAddText}
                     OnClickAddText={OnClickAddText}
            />


        </>
    )
}
