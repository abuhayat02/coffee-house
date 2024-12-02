import { useState } from "react"
import { useEffect } from "react"
import Card from "./utilites/card"


export default function Home() {
  let [info , setInfo] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5001/addCoffee')
    .then(res => res.json())
    .then(data => setInfo(data))
  },[info])

  console.log(info)

  return (
   <div className="grid grid-cols-3 gap-5 py-20">
    {
      info.map(itmems => <Card data={itmems}></Card>)
    }
   </div>
  )
}
