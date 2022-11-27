import React, {useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";




export type MyPostsType = {
    postData:postDataType[]
 }

type postDataType = {
    title:string
}


export const MyPosts = (props: MyPostsType) => {


      const postItem = props.postData.map(el => <Posts userMessage={el.title}/>)

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
            {/*вызваю через мар  Posts (смотри выше)*/}
            {postItem}


        </>
    )
}