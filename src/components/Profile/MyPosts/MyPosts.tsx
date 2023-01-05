import React, {useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";


export type MyPostsType = {
    postPage: PostPageType[]
}

type PostPageType = {
    message: string
}


export const MyPosts = (props: MyPostsType) => {


    const postItem = props.postPage.map(el => <Posts userMessage={el.message}/>)

    const textARef = React.createRef<HTMLTextAreaElement>()
    const OnClickHandlerAdd = () => {
        alert(textARef.current?.value)
    }

    return (
        <>
            <div className={classes.myPosts}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={textARef}></textarea>
                    </div>
                    <button onClick={OnClickHandlerAdd}>add post</button>
                </div>
            </div>
            {/*вызваю через мар  Posts (смотри выше)*/}
            {postItem}


        </>
    )
}