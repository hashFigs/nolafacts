
import DistrictStats from "./districtStats"
import SubjectAge from "./subjectAge"
import  InfluencingFactors from "./influencingFactors"

export default function YearlyStats({data}) {
    
    const subject_eth_black = data.filter(item => {
        return item.subject_ethnicity === "Black"
    })

    const subject_eth_white = data.filter(item => {
        return item.subject_ethnicity === "White"
    })


    return (
<>
        <h1>This is the yearly stats </h1>
        <h3> Total cases: {data.length}</h3>


      <div class="grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2 ">
         
         
          <div class="justify-center p-6" >
            <h1 class="p-6">By District</h1>
            <DistrictStats data={data} />
               
          </div>
         
          <div class="justify-center p-6 ">
            <h1 class="p-6">Influencing factors</h1>
            <InfluencingFactors data={data} />   
          </div>

          <div class="justify-center p-6 ">
            <h1 class="p-6">Subject age range</h1>
            <SubjectAge data={data} />   
          </div>

        

    </div>
   
</>

    )}


    //     <h3> Black: {subject_eth_black.length}</h3>
    //     <h3> White: {subject_eth_white.length}</h3>
