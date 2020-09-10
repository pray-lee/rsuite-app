import React, {useState, useEffect} from 'react'

export const useFetch = fetch => {
    const [loading, setLoading] = useState(0)
    useEffect(() => {
        setLoading(1)
        fetch().then(() => {
            setLoading(0)
        })
        return () => {
           // clearTimeout(t)
        }
    }, [fetch]);
    return loading ? 1 : 0
}
