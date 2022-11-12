import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div  className={classes.headerImg}>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
                <div className={classes.avatar}>
                    ava + description
                </div>
                < MyPosts />

            </div>

        </>
    )
}