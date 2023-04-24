export async function GET(request) {
    
    var options = {
            method: "GET",
            data: {
                "$limit" : 5000,
                 }
    }

    const res = await fetch(`https://data.nola.gov/resource/9mnw-mbde.json?$limit=10000`, options);
    
    return res;

  }
  