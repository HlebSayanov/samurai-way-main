import React, {useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";


export const MyPosts = () => {

    const postData = [
        {title: 'Hello my friend. Haw are you?'},
        {title: 'When I returned home ?'}
    ]


    return (
        <>
            <div className={classes.myPosts}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>add post</button>
                </div>
            </div>

            <Posts title={postData[0].title}/>
            <Posts title={postData[1].title}/>

        </>
    )
}