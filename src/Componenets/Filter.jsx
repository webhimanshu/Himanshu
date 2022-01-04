import React from 'react'
import Data from '../test_units_data.json'
const Filter = ({props}) =>
 {
console.log(props)
    const filterData=()=>
    {
     const newData=Data.filter((data)=>
     {
         console.log(data.bedroom===props)
     })
     console.log(newData)
    }
    return (
        <div>
            <button onClick={filterData}>filter data</button>
        </div>
    )
}

export default Filter
