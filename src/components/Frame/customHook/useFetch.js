import React, {useState, useEffect} from 'react'

export const useFetch = fetch => {
    const [loading, setLoading] = useState(0)
    useEffect(() => {
        let t = null
        setLoading(1)
        fetch().then(data => {
            t = setTimeout(() => {
                setLoading(0)
            }, 3000)
        })
        return () => {
           clearTimeout(t)
        }
    }, [fetch]);
    return loading ? 1 : 0
}
