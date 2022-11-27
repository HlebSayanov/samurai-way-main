import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./MyPosts/Post/Posts";
import state from "../../redux/state";


export const Profile = () => {


    let postPage = state.postPage.posts // переменная для поста с инпутом






    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postPage={postPage}/>

        </div>


    )
}
