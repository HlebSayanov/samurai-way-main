import React from "react";
import classes from "./Posts.module.css";

type PostsType = {
    title:string,
    counts:number
}

export const Posts = (props: PostsType) => {
    debugger
    return (

        <div className={classes.post}>
            <div className={classes.item}>
                <img src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"
                     alt=""/>
                <span>{props.title}</span>
                <div className={classes.like}>
                    {props.counts} like
                </div>
            </div>
        </div>
    );
}