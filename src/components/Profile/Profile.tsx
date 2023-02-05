import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {PostDataType, StoreType} from "../../redux/state";
import {ActionsTypesProfiles} from "../../redux/profiles-reducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";


export type ProfileType = {
    // postPage: PostDataType
    // // addPost:(valuePost:string)=>void
    // // updateAddPost:(valueEvent:string) =>void
    dispatch: (action: ActionsTypesProfiles) => void
    store: StoreType
}
// Создали контейнер для поста , что бы только у него была логига и связь со сторем

export const Profile = () => {


    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer />

        </div>


    )
}
