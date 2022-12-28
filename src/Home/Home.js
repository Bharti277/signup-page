import React, { useState } from 'react'

function Home() {
    const [myObj, setMyObj] = useState([
        {name:"thor", age:5000, occpation:"Save America"},
        {name:"thor", age:5000, occpation:"Save America"},
        {name:"thor", age:5000, occpation:"Save America"},
    ])

    const changeHandler = () => {
        setMyObj({...myObj, name:"Hulk"})
    }
  return (
    <div>
        <h1>Name: {myObj.name}, Age:{myObj.age}, Occupation:{myObj.occpation}</h1>
        <button onClick={changeHandler}>Update</button>
    </div>
  )
}

export default Home