import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const url = "http://localhost:3450/api/Details";
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res))
    },[]);
  return (
    <div>
        {
            data.map((res)=>{
                return(
                    <div>
                        <h1>{res.name}</h1>
                        <h3>{res.title}</h3>
                        <img src={res.img} alt =" " />
                    </div>
                )
            })
        }

    </div>
  )
}

export default ApiCall