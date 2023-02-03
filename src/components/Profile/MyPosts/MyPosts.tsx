import React, {ChangeEvent, useState} from "react";
import classes from "./MyPosts.module.css";
import {Posts} from "./Post/Posts";
import {PostDataType, PostType} from "../../../redux/state";
import {ActionsTypesProfiles, addPostAC, updateAddPostAC} from "../../../redux/profilesReducer";




export type MyPostsType = {
    posts:PostType[]
    newPostText:string
    onChangeHandlerAddText:(value:string)=>void
    OnClickAddText:(value:string)=>void


    // postPage:PostType[]
    // // addPost: (valuePost: string) => void
    // newPostText: string
    // // updateAddPost: (valueEvent: string) => void
    // dispatch:(action:ActionsTypesProfiles)=>void
}


export const MyPosts = (props: MyPostsType) => {


    const postItem = props.posts.map(el => <Posts userMessage={el.message}/>)

    // / const textARef = React.createRef<HTMLTextAreaElement>()   // input(textaree) enter for keys

    const OnClickHandlerAdd = () => {

        props.OnClickAddText(props.newPostText)
        }
       const onChangeHandlerAddText = (e:ChangeEvent<HTMLTextAreaElement>) => {
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
