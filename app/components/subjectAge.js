import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';



export default function SubjectAge({data}){
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
    

console.log("dataaa", data)      
   const labels = ['<16', '16<Sub<18', '18<Sub<20', '20<Sub<25', '25<Sub<30', '30<Sub<35', '35<Sub<40', '40+']   
   

   const Distribuition = {
        datasets: labels.map(() => 0)
    }  

 
   console.log("dist", Distribuition)


const minus16 = data.filter(item => {
    return ( parseInt(item.subject_age) < 16) 
})

const age16_18 = data.filter(item => {
    return ( parseInt(item.subject_age) < 18 && parseInt(item.subject_age) >= 16) 
})
const age18_20 = data.filter(item => {
    return ( parseInt(item.subject_age) < 20 && parseInt(item.subject_age) >= 18) 
})
const age20_25 = data.filter(item => {
    return ( parseInt(item.subject_age) < 25 && parseInt(item.subject_age) >= 20) 
})
const age25_30 = data.filter(item => {
    return ( parseInt(item.subject_age) < 30 && parseInt(item.subject_age) >= 25) 
})
const age30_35 = data.filter(item => {
    return ( parseInt(item.subject_age) < 35 && parseInt(item.subject_age) >= 30) 
})
const age35_40 = data.filter(item => {
    return ( parseInt(item.subject_age) < 40 && parseInt(item.subject_age) >= 35) 
})

const age40plus = data.filter(item => {
    return ( parseInt(item.subject_age) >= 40) 
})


    const cases_by_age = data.map(item => {
       const age = item.subject_age
       return age

    })


    

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Subject Age Range',
          },
        },
      };
      
      
      const datatest = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [minus16.length,age16_18.length, age18_20.length, age20_25.length,age25_30.length, age30_35.length, age35_40.length, age40plus.length],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
         
        ],
      };
      
      const total_classified = minus16.length + age16_18.length + age18_20.length + age20_25.length + age25_30.length + age30_35.length + age35_40.length + age40plus.length

    return(
        <>
        <Bar options={options} data={datatest} />
        </>
    )
}