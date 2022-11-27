import React, {useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";


export const MyPosts = () => {

    const postData = [
        {title: 'Hello my friend. Haw are you?'},
        {title: 'When I returned home ?'},
        {title: 'fdksdfsjsdfo ?'},
        {title: 'When I returned home ?'}
    ]
    const postItem = postData.map(el => <Posts title={el.title}/>)

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


            {postItem}

        </>
    )
}