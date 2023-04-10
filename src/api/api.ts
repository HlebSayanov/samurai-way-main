import axios from "axios";


const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(numberPage: number, pageSizeUsers: number) {
        return instans.get(`users?page=${numberPage}&count=${pageSizeUsers}`)
            .then(response => response.data)

    },
    unfollowUser(id: number) {
        return instans.delete(`follow/${id}`)
            .then(response => response.data)

    },
    followUser(id: number) {
        return instans.post(`follow/${id}`)
            .then(response => response.data)

    },
}
export const profileAPI = {
    getProfile(userId: string) {
        return instans.get(`profile/${userId}` )
    },
    getStatus(userId: string) {
        return instans.get(`/profile/status/`+ userId)
    },
    updateStatus(status:string){
        return instans.put(`/profile/status`, {status})
    }
}

export const authAPI = {
    getAuth() {
        return instans.get(`auth/me`)
            // .then(response => response.data.data)
    },
    login(email:string, password:string,rememberMe:boolean){
        return instans.post(`/auth/login`, {email,password,rememberMe})
    },
    logout(){
        return instans.delete(`/auth/login`)
    }
}
