weatherData=[
    {district:"Thrissur",temp:32},
    {district:"Kottayam",temp:29},
    {district:"Palakkad",temp:34},
    {district:"Ernakulam",temp:33},
    {district:"Thrissur",temp:29},
    {district:"Kottayam",temp:30},
    {district:"Palakkad",temp:32},
    {district:"Ernakulam",temp:31}
]

// print district with its highest temeperature
//output:{Thrissur:32,kottayam:30...}

output={}
weatherData.forEach(districtDetails=>{
    district = districtDetails.district  //district = thrissur
    curTemp = districtDetails.temp   //curTemp=32
    if(output.hasOwnProperty(district)){
        oldTemp = output[district]   //oldTemp=32
        if(curTemp>=oldTemp){   // 29>=32
            output[district] =curTemp
        }
    }else{
        output[district] = curTemp // output={thrissur:32}
    }
})