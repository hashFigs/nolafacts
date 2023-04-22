import { Pie } from "react-chartjs-2";

export default function InfluencingFactors({data}) {

    //classify array of data by influencing factors
    
    const factors = {
        "Mentally unstable": [],
        "Unknown": [],
        "None detected": [],
        "Unknown Drugs": [],
        "Alchohol": [],
        "Alchohol and unknown drugs": [],
    }

    const classification = data.map(item => {
            if (factors.hasOwnProperty(item.subject_influencing_factors)) {
                factors[item.subject_influencing_factors].push(item)
            }
    })
      

    const datatest = {
        labels: ['Mentally unstable', 
                'Unknown',
                'None detected',
                'Unknown Drugs',
                'Alchohol',
                'Alchohol and unknown drugs'],
                
        datasets: [
          {
            label: '# of influences',
            data: [ factors['Mentally unstable'].length, 
            factors['Unknown'].length, 
            factors['None detected'].length, 
            factors['Unknown Drugs'].length, 
            factors['Alchohol'].length, 
            factors['Alchohol and unknown drugs'].length, 
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

 
    return(
        <>
            <h1>This is the influencing factors </h1>
            <Pie data = {datatest} />
        </>
    )

}
