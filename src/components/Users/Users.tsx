import React from 'react';
import {UsersTypeProps} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../assets/images/rickAva.png'
import {ItmesType} from "../../redux/users-reducer";


 export  class Users extends React.Component<UsersTypeProps,ItmesType[]>   {

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
    let arrTotalPage = []

       const pagesCount=Math.ceil(this.props.totalUsers/this.props.pageSizeUsers)

         for(let i = 1; i<pagesCount; i++){
             arrTotalPage.push(i)
         }

         return (
            <>
                {arrTotalPage.map(el=>{
                    return <span onClick={()=>this.changePage(el)}
                        className={this.props.numberPage  === el? styles.numberPage :''}>{el}</span>
                })}
                {this.props.usersPage.map(el => {
                    const onClickHandler = () => {
                        this.props.checkedFallow(el.id, !el.followed)
                        console.log(el.followed, el.id)
                    }

                    return (
                        <div key={el.id}>
                            <img src={el.photos === null ? el.photos : userPhoto} className={styles.avatar}/>
                            <div>{el.followed ? <button onClick={onClickHandler}>Fallow</button> :
                                <button onClick={onClickHandler}>Unfallow</button>}</div>

                            <span> {el.name}</span>
                            <div>{el.status}</div>
                            <div>{'el.location.city'}</div>
                            <div>{'el.location.country'}</div>
                        </div>
                    )
                })}
            </>


        );
    }

};
