import React from "react";
import {AppStateType} from "./store-redux";
import {createSelector} from "reselect";

const getItemsSelector = (state:AppStateType) => {
  return state.items.items
}
export const getItems = createSelector(getItemsSelector,(users)=>{
  return users.filter(u=>true)
})

export const getPageSizeUsers = (state:AppStateType) => {
  return state.items.pageSizeUsers
}
export const getTotalUsers = (state:AppStateType) => {
  return state.items.totalUsers
}
export const getNumberPage = (state:AppStateType) => {
  return state.items.numberPage
}
export const getIsFetching = (state:AppStateType) => {
  return state.items.isFetching
}
export const getFollowingProgress = (state:AppStateType) => {
  return state.items.followingProgress
}
