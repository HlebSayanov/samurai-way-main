import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";
import {ProfileUserType} from "../../redux/profiles-reducer";


// Создали контейнер для поста , что бы только у него была логига и связь со сторем

export const Profile = ( props:{userProfile:ProfileUserType}) => {


    return (

        <div className={classes.content}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>

        </div>


    )
}
