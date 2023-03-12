import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import axios from "axios";
import {ItmesType} from "../../redux/users-reducer";
import {Users} from "./Users";


 export  class UsersComponentForAPI extends React.Component<UsersTypeProps,ItmesType[]>   {

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.pageSizeUsers}`)
        .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsers(response.data.totalCount > 100 ?54:0)
        })

    }

changePage=(number:number)=>{
    this.props.setNumberPage(number)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSizeUsers}`).then(response => {
        this.props.setUsers(response.data.items)})
}



     render(){
         return <Users
             totalUsers={this.props.totalUsers}
             pageSizeUsers={this.props.pageSizeUsers}
             numberPage={this.props.numberPage}
             changePage={this.changePage}
             usersPage={this.props.usersPage}
             checkedFallow={this.props.checkedFallow}
         />
     }



};
