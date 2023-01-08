import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./MyPosts/Post/Posts";
import state, {addPostBtn, DialogType, MessageType, PostType} from "../../redux/state";


export type PostDataType = {
    postPage: PostType[]
    addPost:(valuePost:string)=>void
    updateAddPost:(valueEvent:string) =>void
    newPostText:string
}
let a = state.dialogPage.dialogs
console.log(a)

export const Profile = (props:PostDataType) => {


  // переменная для поста с инпутом





    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postPage={props.postPage}
                     newPostText={props.newPostText}
                     addPost={addPostBtn}
                     updateAddPost={props.updateAddPost}

                    />

        </div>


    )
}
