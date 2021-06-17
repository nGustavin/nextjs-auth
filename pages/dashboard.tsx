import React, { useEffect, useState } from 'react'
import api from '../services/api'

interface User{
    email: string,
    password: string,
    username: string,
    id: string,
}

export default function dashboard() {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        async function fetchUserInfo(){
            await api.get('/dashboard').then(response => {
                setUser(response.data)
            })
        }

        fetchUserInfo()
    }, [])

    console.log(user)

    return (
        <div>
        </div>
    )
}
