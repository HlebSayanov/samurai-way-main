import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";
import {ProfileUserType} from "../../redux/profiles-reducer";


// Создали контейнер для поста , что бы только у него была логига и связь со сторем

type ProfileType = {
    userProfile:ProfileUserType
    status:string
    updateStatus:(status:string)=>void
}

export const Profile = ( props:ProfileType) => {

    return (

        <div className={classes.content}>
            <ProfileInfo
                userProfile={props.userProfile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>

        </div>


    )
}
