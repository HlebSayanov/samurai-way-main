import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import { PostDataType} from "../../redux/state";
import {ActionsTypesProfiles} from "../../redux/profilesReducer";


export type ProfileType = {
    postPage: PostDataType
    // addPost:(valuePost:string)=>void
    // updateAddPost:(valueEvent:string) =>void
    dispatch:(action:ActionsTypesProfiles)=>void

}


export const Profile = (props:ProfileType) => {


  // переменная для поста с инпутом





    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postPage={props.postPage.posts}
                     newPostText={props.postPage.newPostText}
                     dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // updateAddPost={props.updateAddPost}

                    />

        </div>


    )
}
