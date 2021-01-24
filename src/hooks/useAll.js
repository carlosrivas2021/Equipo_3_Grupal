import { useState, useEffect } from 'react';
import { Fetching } from '../services/Fetching/Fetching';
export default function useData (url_api) {
    const [data_api, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(() => {
        setLoading(true)
        if(token) {
            Fetching(url_api, {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + token
                },
                body: {
                    "type":"list"
                }
            })
            .then((data) => {
                setData({
                    ...data, 
                    authentication: true
                });
            })
            
        } else {
            setData({
                authentication: false
            })
        }
    }, [])
    return {
        loading,
        data_api
    }
}
