import React, { useEffect, useState } from 'react';
import Loading from "./Loading"

function FakeAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStoreData = async () => {
        try{
            setLoading(false)
            const storeData = await fetch("https://fakestoreapi.com/products");
        setData(await storeData.json());
        }catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getStoreData()
    }, []);

    if(loading){
        return <Loading />
    }
  return (
    <div>
        {data.map((ele) => {
            return(
                <h1 key={ele.id}>{ele.title}</h1>
            )
        })}
    </div>
  )
}

export default FakeAPI