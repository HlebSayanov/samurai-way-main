import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {
    fallowOrUnfollowAC,
    setUsersAC,
    UsersTest,
    ItmesType,
    setNumberPageAC,
    setTotalCountsAC
} from "../../redux/users-reducer";



type mapStateToPropsType = {
    usersPage:ItmesType[]
    pageSizeUsers:number
    totalUsers:number
    numberPage:number

}
type mapDispatchToPropsType = {
    checkedFallow:(usersId: number, isDone: boolean)=>void
    setUsers:(newUsers: any) =>void
    setNumberPage:(newPage: number) =>void
    setTotalUsers:(count: number) =>void
}

export type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        usersPage:state.items.items,
        pageSizeUsers:state.items.pageSizeUsers,
        totalUsers:state.items.totalUsers,
        numberPage:state.items.numberPage,

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
      }
         
  }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
