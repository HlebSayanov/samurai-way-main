import React from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";


export const MyPosts = () => {
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
           <Posts title={'Hello my friend. Haw are you?'} counts={4}/>
           <Posts title={'When I returned home ?'} counts={10}/>

        </>
    )
}