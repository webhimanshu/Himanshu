import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { wildcards } from './wildcard'
import Test from './test_fliter_options.json'
import Data from './test_units_data.json';
import Filter from './Componenets/Filter'

const Main = () =>
 {
     console.log(Test);
     const [bedroom, setBedRoom] = useState();
     const [floor,setFloor]=useState();
     const[grossm,setGrossm]=useState();
     const[prices,setPrices]=useState();
    const [arr,setArr]=useState(Data);

    const FilterData=()=>
    {
        const list=arr.filter((cur)=>
        {
          const pricesArr=prices.split("-");
          const grossArr=grossm.split("-");
          
 
     
            if(cur.bedroom.charAt(0)==bedroom.charAt(0)  && cur.floor.charAt(0)==floor && (cur.price>=parseInt(pricesArr[0]) && cur.price<=parseInt(pricesArr[1])) && (cur.grossm2>=parseFloat(grossArr[0]) && cur.grossm2<=parseInt(grossArr[1])   ))
            {
               return cur;
            }  
  
        })
        setArr(list);
    }
     return (
        <>
       

<div>
    <h1>Floor</h1>
    <select onChange={(e)=>setFloor(parseInt(e.target.value))} value={floor}>
         <option>-----</option>
             {
               Test.floor.map((data,index)=>
               {
                   return(<option  value={data} key={index}>{parseInt(data)}</option>)
               })  
             }
         </select>
       
</div>
<div>
    <h1>Bedroom</h1>
    <select onChange={(e)=>setBedRoom(e.target.value)} value={bedroom}>
         <option>-----</option>
             {
               Test.bedroom.map((data,index)=>
               {
                   return(<option  value={data} key={index}>{data}</option>)
               })  
             }
         </select>
       
</div>
<div>
    <h1>Prices</h1>
    <select onChange={(e)=>setPrices(e.target.value)} value={prices}>
         <option>-----</option>
             {
               Test.prices.map((data,index)=>
               {
                   return(<option  value={data} key={index}>{data}</option>)
               })  
             }
         </select>
       
</div>
<div>
    <h1>Grossm</h1>
    <select onChange={(e)=>setGrossm(e.target.value)} value={grossm}>
         <option>-----</option>
             {
               Test.grossm2.map((data,index)=>
               {
                   return(<option  value={data} key={index}>{data}</option>)
               })  
             }
         </select>
       
</div>

 <button  onClick={FilterData}>Filter via floor</button>
 <table style={{border:"2px solid black"}}>
   <tr style={{border:"2px solid black"}}>
    <th style={{border:"2px solid black"}}>uniqueID</th>
    <th style={{border:"2px solid black"}}>bedroom</th>
    <th style={{border:"2px solid black"}}>floor</th>
    <th style={{border:"2px solid black"}}>grossm2</th>
    <th style={{border:"2px solid black"}}>price</th>
    <th style={{border:"2px solid black"}}>apartment_id</th>
 

  </tr>
  {
      arr.map((data)=>
      (
          <tr>
              <td style={{border:"2px solid black"}}>{data.uniqueID}</td>
              <td style={{border:"2px solid black"}}>{data.bedroom}</td>
              <td style={{border:"2px solid black"}}>{data.floor}</td>
              <td style={{border:"2px solid black"}}>{data.grossm2}</td>
              <td style={{border:"2px solid black"}}>{data.price}</td>
              <td style={{border:"2px solid black"}}>{data.apartment_id}</td>
          </tr>
      ))
  }
  </table>

        </>
    )
}

export default Main
