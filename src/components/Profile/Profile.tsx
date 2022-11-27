import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./MyPosts/Post/Posts";


export const Profile = () => {
    const postData = [
        {title: 'Hello my friend. Haw are you?'},
        {title: 'When I returned home ?'},
        {title: 'fdksdfsjsdfo ?'},
        {title: 'fdksdfsjsdfo ?'},
        {title: 'fdksdfsjsdfo ?'},
        {title: 'When I returned home ?'}
    ]
    const postItem = postData.map(el => el.title)
    console.log(postData)

    return (

        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>

        </div>


    )
}
