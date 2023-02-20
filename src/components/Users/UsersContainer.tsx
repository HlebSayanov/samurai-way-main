import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store-redux";
import {Dispatch} from "redux";
import {fallowOrUnfollowAC, setUsersAC, UsersTest, UsersType} from "../../redux/users-reducer";



type mapStateToPropsType = {
    usersPage:UsersType[]
}
type mapDispatchToPropsType = {
    checkedFallow:(usersId: number, isDone: boolean)=>void
    setUsers:(newUsers: any) =>void
}
export type UsersTypeProps = mapStateToPropsType & mapDispatchToPropsType



const mapStateToProps = (state:AppStateType):mapStateToPropsType=>{
    return{
        usersPage:state.users.users
    }
}

const mapDispatchToProps = (dispacth:Dispatch):mapDispatchToPropsType => {
  return{
      checkedFallow:(usersId: number, isDone: boolean)=>{
          dispacth(fallowOrUnfollowAC(usersId,isDone))
      },
      setUsers:(newUsers: any) =>{
          dispacth(setUsersAC(newUsers))
      }
         
  }
}



export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
