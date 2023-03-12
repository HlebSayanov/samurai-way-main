import React from 'react';
import {connect} from "react-redux";
import {UsersComponentForAPI} from "./UsersComponentForAPI";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    fallowOrUnfollowAC,
    setUsersAC,
    ItmesType,
    setNumberPageAC,
    setTotalCountsAC, toggleIsFetchingAC
} from "../../redux/users-reducer";



type mapStateToPropsType = {
    usersPage:ItmesType[]
    pageSizeUsers:number
    totalUsers:number
    numberPage:number
    isFetching:boolean

}
type mapDispatchToPropsType = {
    checkedFallow:(usersId: number, isDone: boolean)=>void
    setUsers:(newUsers: any) =>void
    setNumberPage:(newPage: number) =>void
    setTotalUsers:(count: number) =>void
    toggleIsFetching:(isFetching:boolean)=>void
}
export type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        usersPage:state.items.items,
        pageSizeUsers:state.items.pageSizeUsers,
        totalUsers:state.items.totalUsers,
        numberPage:state.items.numberPage,
        isFetching:state.items.isFetching

    }
}

const mapDispatchToProps = (dispacth:Dispatch):mapDispatchToPropsType => {
  return{
      checkedFallow:(usersId: number, isDone: boolean)=>{
          dispacth(fallowOrUnfollowAC(usersId,isDone))
      },
      setUsers:(newUsers: ItmesType[]) =>{
          dispacth(setUsersAC(newUsers))
      },
      setNumberPage:(newPage: number) =>{
          dispacth(setNumberPageAC(newPage))
      },
      setTotalUsers:(count: number) => {
          dispacth(setTotalCountsAC(count))
      },
      toggleIsFetching:(isFetching:boolean)=>{
        dispacth(toggleIsFetchingAC(isFetching))
      }
         
  }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersComponentForAPI)
