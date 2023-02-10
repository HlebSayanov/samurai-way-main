import React from "react";
import { PostType} from "../../../redux/state";
import { addPostAC, updateAddPostAC} from "../../../redux/profiles-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/store-redux";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// export type MyPostsContainerType = {
//     store: ReduxStoreType
//
//     dispatch: (action: ActionsTypesProfiles) => void
// }

// export const MyPostsContainer12 = () => {
//
//
//     return (
//         <>
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//
//                         console.log(store.getState(), 'dfs')
//
//                         const posts = store.getState().profiles.posts
//
//                         // props.store.getState().postPage.posts           // render posts
//                         const newPostText = store.getState().profiles.newPostText     //  наши новые сообщение
//
//                         // / const textARef = React.createRef<HTMLTextAreaElement>()   // input(textaree) enter for keys
//
//                         const OnClickAddText = (value: string) => {
//                             store.dispatch(addPostAC(value))                // через пропсы принимаем с myPost
//                         }
//                         const onChangeHandlerAddText = (value: string) => {               //  аналогично
//                             store.dispatch(updateAddPostAC(value))
//                             console.log(value)
//                         }
//
//                         return <MyPosts posts={posts}
//                                         newPostText={newPostText}
//                                         onChangeHandlerAddText={onChangeHandlerAddText}
//                                         OnClickAddText={OnClickAddText}
//                         />
//                     }
//                 }
//
//
//             </StoreContext.Consumer>
//
//
//         </>
//     )
// }

export type mapStateToPropsType = {
    posts:PostType[]
    newPostText:string
}
export type mapDispatchToPropsType ={
    OnClickAddText: (value: string) => void
    onChangeHandlerAddText: (value: string)=>void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.profiles.posts,
        newPostText: state.profiles.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        OnClickAddText: (value: string) => {
            dispatch(addPostAC(value))
        },
        onChangeHandlerAddText: (value: string) => {
            dispatch(updateAddPostAC(value))
        }
    }
}
    export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
