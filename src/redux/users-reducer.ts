export type PhotosType = {
    small: null | string
    large: null | string
}
export type ItmesType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: PhotosType
    status: null
    followed: boolean
}
type FollowingProgressType = {
    followingProgress:[]
}

export type ActionsTypes =
    fallowOrUnfollowActionType
    | setUsersActionType
    | setNumberPageActionType
    | setTotalCountsActionType
    | toggleIsFetchingActionType
    |toggleIsFollowingProgressBtnDisabledActionType

const followingProgressArray:number[]=[]

const initialState = {
    items: [] as ItmesType[],
    pageSizeUsers: 4,
    totalUsers: 0,
    numberPage: 1,
    isFetching: true,
    followingProgress: followingProgressArray


}

type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW-UNFOLLOW":
            console.log(action.payload.isDone)
            return {
                ...state, items: state.items.map(el => el.id === action.payload.usersId
                    ? {...el, followed: action.payload.isDone}
                    : el)
            }
        case "SET-USERS":
            return {...state, items: action.payload.newUsers}

        case "SET-PAGE":
            return {...state, numberPage: action.payload.newPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsers: action.payload.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS-BUTTON-DISABLED":
            return {...state,
                followingProgress: action.payload.isFetching
                        ? [...state.followingProgress, action.payload.userId]
                        :state.followingProgress.filter(el=> el !== action.payload.userId)


            }
        default:
            return state
    }
}

export type  fallowOrUnfollowActionType = ReturnType<typeof fallowOrUnfollow>
export type  setUsersActionType = ReturnType<typeof setUsers>
export type  setNumberPageActionType = ReturnType<typeof setNumberPage>
export type  setTotalCountsActionType = ReturnType<typeof setTotalCounts>
export type  toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type  toggleIsFollowingProgressBtnDisabledActionType = ReturnType<typeof toggleIsFollowingProgressBtnDisabled>

export const fallowOrUnfollow = (usersId: number, isDone: boolean) => {
    return {
        type: "FOLLOW-UNFOLLOW",
        payload: {usersId, isDone}
    } as const
}
export const setUsers = (newUsers: ItmesType[]) => {
    return {
        type: "SET-USERS",
        payload: {newUsers}
    } as const
}
export const setNumberPage = (newPage: number) => {
    return {
        type: "SET-PAGE",
        payload: {newPage}
    } as const
}
export const setTotalCounts = (count: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        payload: {count}
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {isFetching}
    } as const
}
export const toggleIsFollowingProgressBtnDisabled = (isFetching: boolean,userId:number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS-BUTTON-DISABLED",
        payload: {isFetching,userId}
    } as const
}



