import React, {useState} from "react";
import classes from "./Posts.module.css";
import {Button} from "../../../Button/Button";

type PostsType = {
    userMessage: string,
}


export const Posts = (props: PostsType) => {

    let [likes, setLikes] = useState(0)
let[dislikes, setDislikes]=useState(0)


    const onClickCounterLike = () => {

        setLikes(likes +1)
        console.log(likes)
    }


    const onClickCounterDislike = () => {
        setDislikes(dislikes+1)

    }

    return (

        <div className={classes.post}>
            <div className={classes.item}>
                <img src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"
                     alt=""/>
                <span>{props.userMessage}</span>
                <div className={classes.like}>
                    <span>
                        <Button name={'like ' + likes} callback={onClickCounterLike}/>
                         </span>
                    <Button name={'dislike ' + dislikes} callback={onClickCounterDislike}/>


                </div>
            </div>
        </div>
    );
}