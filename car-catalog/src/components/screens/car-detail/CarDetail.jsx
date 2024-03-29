import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { CarService } from '../../../services/car.service.js'
import CarItem from "../home/car-item/CarItem.jsx"
const CarDetail = () =>{
   
   const { id } = useParams()
   const[car, setCar] = useState({})

useEffect(() => {
  
  if (!id) return
    const fetchData = async() => {
    const data = await CarService.getById(id)
console.log(data)
    setCar(data)
  }

  fetchData()
}, [id])
    if (!car?.name) return<p>Loading...</p>
    return <div><CarItem car={car}/> {id}</div>
}
export default CarDetail 