import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profiles-reducer";
import {Preloader} from "../../common/Preloader/Preloader";



export const ProfileInfo = (props:{userProfile:ProfileUserType}) => {
    if(!props.userProfile.photos){
        return <Preloader/>
    }
    return (
        <>

                <div  className={classes.headerImg}>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt=""/>
                </div>
            <div className={classes.userBlock}>
                <div className={classes.avatar}>
                    <img src={props.userProfile.photos.large} alt="avatar user"/>
                    ava + description
                </div>
                <div className={classes.description}>
                    {props.userProfile.aboutMe}
                   <p>{props.userProfile.fullName}</p>

                </div>
            </div>




        </>
    )
}
