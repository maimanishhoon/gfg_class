//api fetcher
import React, { useEffect } from 'react'
import { useState } from 'react'

const customhook = (url) => {
    let [data, setData] = useState(null)
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json()) 
        .then((data) => setData(data))
    },[url])
    return [data];
}

export default customhook