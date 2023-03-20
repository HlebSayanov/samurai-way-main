import React from 'react';
import {connect} from "react-redux";
import {UsersComponentForAPI} from "./UsersComponentForAPI";
import {AppStateType} from "../../redux/store-redux";

import {
    fallowOrUnfollow,
    setUsers,
    ItmesType,
    setNumberPage,
    setTotalCounts, toggleIsFetching, toggleIsFollowingProgressBtnDisabled
} from "../../redux/users-reducer";



type mapStateToPropsType = {
    usersPage:ItmesType[]
    pageSizeUsers:number
    totalUsers:number
    numberPage:number
    isFetching:boolean
    followingProgress:Array<number>

}
type mapDispatchToPropsType = {
    fallowOrUnfollow:(usersId: number, isDone: boolean)=>void
    setUsers:(newUsers: any) =>void
    setNumberPage:(newPage: number) =>void
    setTotalCounts:(count: number) =>void
    toggleIsFetching:(isFetching:boolean)=>void
    toggleIsFollowingProgressBtnDisabled : (isFetching: boolean,userId:number) => void
}
export type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        usersPage:state.items.items,
        pageSizeUsers:state.items.pageSizeUsers,
        totalUsers:state.items.totalUsers,
        numberPage:state.items.numberPage,
        isFetching:state.items.isFetching,
        followingProgress:state.items.followingProgress

    }
}

// const mapDispatchToProps = (dispacth:Dispatch):mapDispatchToPropsType => {
//   return{
//       fallowOrUnfollow:(usersId: number, isDone: boolean)=>{
//           dispacth(fallowOrUnfollow(usersId,isDone))
//       },
//       setUsers:(newUsers: ItmesType[]) =>{
//           dispacth(setUsers(newUsers))
//       },
//       setNumberPage:(newPage: number) =>{
//           dispacth(setNumberPage(newPage))
//       },
//       setTotalCounts:(count: number) => {
//           dispacth(setTotalCounts(count))
//       },
//       toggleIsFetching:(isFetching:boolean)=>{
//         dispacth(toggleIsFetching(isFetching))
//       }
//
//   }
// }



export const UsersContainer = connect(
    mapStateToProps,
    {fallowOrUnfollow,setUsers,setNumberPage,setTotalCounts,toggleIsFetching,toggleIsFollowingProgressBtnDisabled})
(UsersComponentForAPI)
