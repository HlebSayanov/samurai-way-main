import React, {ChangeEvent, useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";
import {MyPostsPropsType} from "./MyPostsContainer.tsx";
import {AddMessageForm} from "../../AddMessageForm/AddMessageForm";


// MyPostsPropsType экспорт из контейнера


export const MyPosts = (props: MyPostsPropsType) => {
    const postItem = props.posts.map(el => <Posts key={el.id} userMessage={el.message}/>)

    const OnClickAddMessage = (value:string) => {
        props.OnClickAddText(value)
    }

    return (
        <>
            <div className={classes.myPosts}>
                <h3>My post</h3>
                <div>
                   <AddMessageForm addMessage={OnClickAddMessage}/>
                </div>
            </div>
            {/*вызваю через мар  Posts (смотри выше)*/}
            {postItem}


        </>
    )
}
