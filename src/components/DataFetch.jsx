import React, { useEffect, useState } from "react";

export const DataFetch = () =>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const fetchData = async () =>{
        try{
            const response = await fetch('https://api.randomuser.me/')
            const data = await response.json()
            const [item] = data.results
            
            setUser(item)
            setLoading(false)
        }
        catch(error) {
            console.error("データの取得中にエラーが発生しました:", error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData()
        console.log("useEffect関数が実行されました")
    },[])
    return(
        <div>
            {loading? <h1>loading...</h1> : <h1>{user.name.first}{user.name.last}</h1>}
        </div>
    )
}