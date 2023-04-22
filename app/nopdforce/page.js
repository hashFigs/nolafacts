'use client'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import YearlyStats from '../components/yearlyStats'
const inter = Inter({ subsets: ['latin'] })

export default function Nopdforce() {
  
    const [data, setData] = useState([{date_occurred: "2022-05-30T00:00:00.000"}])
    const [isLoading, setLoading] = useState(false)
    const [selectedData, setSelectedData] = useState([])
    const [selectedYear, setSelectedYear] = useState(2022)
    
    const total16 = data.filter((item) => {
          const date = new Date(item.date_occurred)
          return date.getFullYear() === 2016 
     
    })
    const total17 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2017 
 
    })
    const total18 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2018 

    })
    const total19 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2019 

    })

    const total20 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2020 

    })

    const total21 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2021 

    })

    const total22 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2022 

    })

    const total23 = data.filter((item) => {
      const date = new Date(item.date_occurred)
      return date.getFullYear() === 2023 

    })

    useEffect(() => {
        setLoading(true)
        fetch('/api/nopdUseOfForce')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
            console.log(data)
          })
      }, [])

      console.log("Select", selectedData)
  
return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
      <h1 className="text-6xl font-bold py-6">NOPD use of force  </h1>
      

      <div class="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-8 ">
         
         
          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total16)}>
            <h1 class="p-6">2016</h1>
            <h1 class="p-6">{total16.length}</h1>   
          </div>

          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700 " onClick={() => setSelectedData(total17)}>
          <h1 class="p-6">2017</h1>
            <h1 class="p-6">{total17.length}</h1>   
          </div>
          
          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total18)}>
          <h1 class="p-6">2018</h1>
          <h1 class="p-6" >{total18.length}</h1>   
          </div>
     

        
          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total19)}>
            <h1 class="p-6">2019</h1>
            <h1 class="p-6">{total19.length}</h1>   
          </div>

          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total20)}>
          <h1 class="p-6">2020</h1>
            <h1 class="p-6">{total20.length}</h1>   
          </div>
          
          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total21)}>
          <h1 class="p-6">2021</h1>
          <h1 class="p-6" >{total21.length}</h1>   
          </div>

          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total22)}>
          <h1 class="p-6">2022</h1>
          <h1 class="p-6" >{total22.length}</h1>   
          </div>

          <div class="justify-center p-6 bg-sky-500 hover:bg-sky-700" onClick={() => setSelectedData(total23)}>
          <h1 class="p-6">2023</h1>
          <h1 class="p-6" >{total23.length}</h1>   
          </div>
       </div>

      
        <YearlyStats data = {selectedData} />


    </main>
  )
}
