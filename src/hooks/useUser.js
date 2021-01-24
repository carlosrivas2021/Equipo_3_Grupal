import { useState, useEffect } from 'react';
import { Fetching } from '../services/Fetching/Fetching';
export default function useUser () {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        setLoading(true)
        if(token) {
            Fetching('https://betterlinkedin.herokuapp.com/api/auth/me', {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + token
                }
            })
            .then((data) => {
                setUser({
                    ...data.data,
                    authentication: true
                });
                setLoading(false)
            })
        } else {
            setUser({
                authentication: false
            })
        }
    }, [])
    return {
        loading,
        user
    }
}