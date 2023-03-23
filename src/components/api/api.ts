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
        return instans.get(`profile/` + userId)
    }
}

export const authAPI = {
    getAuth() {
        return instans.get(`auth/me`)
            // .then(response => response.data.data)
    }
}
