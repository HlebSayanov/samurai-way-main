import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileUserType} from "../../../redux/profiles-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import rick from "../../assets/images/rickandmorty.png"
import {StatusProfile} from "./StatusProfile";

type ProfileInfoType = {
    userProfile: ProfileUserType,
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.userProfile.photos) {
        return <Preloader/>
    }


    return (
        <>

            <div className={classes.headerImg}>
                {/*<img*/}
                {/*    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
                {/*    alt="header-image"/>*/}
            </div>
            <div className={classes.userBlock}>
                <div className={classes.avatar}>
                    <img src={props.userProfile.photos.large || rick}
                         alt="avatar user"/>
                    ava + description
                </div>

                <div className={classes.description}>
                    <div>
                        <StatusProfile
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                    </div>
                    <ul>
                        <li>{props.userProfile.aboutMe}</li>
                        <li>{props.userProfile.fullName}</li>
                        <li> {props.userProfile.contacts.facebook}</li>
                        <li>{props.userProfile.contacts.github}</li>
                        <li>{props.userProfile.contacts.mainLink}</li>

                    </ul>


                </div>
            </div>


        </>
    )
}
