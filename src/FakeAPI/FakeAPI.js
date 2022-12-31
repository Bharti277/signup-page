import React, { useEffect, useState } from 'react'

function FakeAPI() {
    const [data, setData] = useState([]);

    const getStoreData = async () => {
        try{
            const storeData = await fetch("https://fakestoreapi.com/products");
        setData(await storeData.json());
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getStoreData()
    }, [])
  return (
    <div>
        {data.map((ele) => {
            return(
                <h1>{ele.title}</h1>
            )
        })}
    </div>
  )
}

export default FakeAPI