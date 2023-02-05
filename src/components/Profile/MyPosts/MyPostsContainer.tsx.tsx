import React from "react";

import { StoreType} from "../../../redux/state";
import {ActionsTypesProfiles, addPostAC, updateAddPostAC} from "../../../redux/profiles-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../storeContext";
import {ReduxStoreType} from "../../../redux/store-redux";



// export type MyPostsContainerType = {
//     store: ReduxStoreType
//
//     dispatch: (action: ActionsTypesProfiles) => void
// }


export const MyPostsContainer = () => {


    return (
        <>
            <StoreContext.Consumer>
                {
                    (store) => {

                        console.log(store.getState(), 'dfs')

                        const posts = store.getState().profiles.posts

                        // props.store.getState().postPage.posts           // render posts
                        const newPostText = store.getState().profiles.newPostText     //  наши новые сообщение

                        // / const textARef = React.createRef<HTMLTextAreaElement>()   // input(textaree) enter for keys

                        const OnClickAddText = (value: string) => {
                            store.dispatch(addPostAC(value))                // через пропсы принимаем с myPost
                        }
                        const onChangeHandlerAddText = (value: string) => {               //  аналогично
                            store.dispatch(updateAddPostAC(value))
                            console.log(value)
                        }

                        return <MyPosts posts={posts}
                                        newPostText={newPostText}
                                        onChangeHandlerAddText={onChangeHandlerAddText}
                                        OnClickAddText={OnClickAddText}
                        />
                    }
                }


            </StoreContext.Consumer>


        </>
    )
}
