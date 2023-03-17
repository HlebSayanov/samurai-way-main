import React, {ChangeEvent, useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";
import {MyPostsPropsType} from "./MyPostsContainer.tsx";


// MyPostsPropsType экспорт из контейнера


export const MyPosts = (props: MyPostsPropsType) => {


    const postItem = props.posts.map(el => <Posts key={el.id} userMessage={el.message}/>)


    const OnClickHandlerAdd = () => {
        props.OnClickAddText(props.newPostText)
    }

    const onChangeHandlerAddText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let valueTextArea = e.currentTarget.value
        props.onChangeHandlerAddText(valueTextArea)
    }

    return (
        <>
            <div className={classes.myPosts}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onChangeHandlerAddText}
                            value={props.newPostText}
                        ></textarea>
                    </div>
                    <button onClick={OnClickHandlerAdd}>add post</button>
                </div>


            </div>
            {/*вызваю через мар  Posts (смотри выше)*/}
            {postItem}


        </>
    )
}
