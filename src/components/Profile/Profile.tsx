import React from "react";
import classes from "./Profile.module.css";


export const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        new post
                    </div>
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post1
                    </div>
                    <div className={classes.item}>
                        Post2
                    </div>
                </div>

            </div>

        </>
    )
}