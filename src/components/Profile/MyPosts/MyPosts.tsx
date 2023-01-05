import React, {ChangeEvent, useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";
import {addPost} from "../../../redux/state";


export type MyPostsType = {
    postPage: PostPageType[]
    addPost: (valuePost: string) => void
    newPostText: string
    updateAddPost: (valueEvent: string) => void
}

type PostPageType = {
    message: string
}




export const MyPosts = (props: MyPostsType) => {


    const postItem = props.postPage.map(el => <Posts userMessage={el.message}/>)

    // / const textARef = React.createRef<HTMLTextAreaElement>()   // input(textaree) enter for keys


    const OnClickHandlerAdd = () => {
        // if (textARef.current) {
        //     props.addPost(textARef.current.value)    // addPosts throwing form state
        //     textARef.current.value = ''
        // /props.addPost(props.newPostText)
      props.addPost(props.newPostText)

        }

       const onChangeHandlerAddText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateAddPost(e.currentTarget.value)
       }
    console.log(props.newPostText)

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