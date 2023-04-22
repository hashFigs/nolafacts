import {Pie} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function districtStats({data}) {
    
    ChartJS.register(ArcElement, Tooltip, Legend);
   
    const district1L = 25;
    const nolaDistricts = {
        '1st District': [], 
        '2nd District': [],
        '3rd District': [],
        '4th District': [],
        '5th District': [],
        '6th District': [],
        '7th District': [],
        '8th District': []
    }
    
    const distribuition = data.map(item => {
        if(nolaDistricts.hasOwnProperty(item.division_level)){
            nolaDistricts[item.division_level].push(item)
        }
    })

    const datatest = {
        labels:    
                ['1st District', 
                '2nd District',
                '3rd District',
                '4th District',
                '5th District',
                '6th District',
                '7th District',
                '8th District'],
        datasets: [
          {
            label: '# of interventions',
            data: [ nolaDistricts['1st District'].length, 
                    nolaDistricts['2nd District'].length, 
                    nolaDistricts['3rd District'].length, 
                    nolaDistricts['4th District'].length, 
                    nolaDistricts['5th District'].length, 
                    nolaDistricts['6th District'].length, 
                    nolaDistricts['7th District'].length, 
                    nolaDistricts['8th District'].length
          ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };



    return (
        <>
        
        <Pie data={datatest} />
        <p> to see <a href="https://nola.gov/nopd/districts/">district map</a> visit:</p>
        
        
        </>
        )
}