export async function GET(request) {
    
    var options = {
        method: "GET",
                data: {
            "$limit" : 5000,
        //    "$$app_token" : "YOURAPPTOKENHERE"
          }
    }

    const res = await fetch(`https://data.nola.gov/resource/9mnw-mbde.json?$limit=10000`, options);
    
    return res;

   // return new Response('this is the LA data')


  //  
  }
  