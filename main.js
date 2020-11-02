
  function chooseRandomTopic(){
   

    const topic = [ 'orbitDistanceKm', 'equatorialRadiusKm', 'volumeKm3'];
    return topic[Math.floor(Math.random() * topic.length)];
}

//choose a random value to output 

function chooseRandomValue(topic) {
    

    const orbitDistanceKm = ["57909227", "108209475", "149598262", "227943824", "778340821", "1426666422", "2870658186", "4498396441"];
    const equatorialRadiusKm = ["2439", "6051", "6371", "3389", "69911", "58232", "25362", "24622"];
    const volumeKm3 = ["60827208742", "928415345893", "1083206916846", "163115609799", "1431281810739360", "827129915150897", "68334355695584",	"62525703987421"];

    const randomIndex = Math.floor(Math.random() * 7);

    if(topic == "orbitDistanceKm" ){ console.log(orbitDistanceKm[randomIndex]); return orbitDistanceKm[randomIndex]; }
    else if (topic == "equatorialRadiusKm" ) { console.log(equatorialRadiusKm[randomIndex]); return equatorialRadiusKm[randomIndex];}
    else if (topic == "volumeKm3" ){ console.log(volumeKm3[randomIndex]); return volumeKm3[randomIndex];}
    
}

function chooseRandomPlanet(){
    const planet = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
    return planet[Math.floor(Math.random() * planet.length)];
}

function transformNOintoStr(no){
    let noLength = no.length;
    let finalString = '';
    noLength++;

    if(noLength === 15||noLength === 12 || noLength === 9 || noLength === 6 || noLength === 3) finalString = no.slice(0,2);
    else if(noLength === 14|| noLength === 11 || noLength === 8 || noLength === 5 || noLength === 2) finalString = no.slice(0,1);
    else if (noLength === 13|| noLength === 10 || noLength ===  7|| noLength === 4 || noLength === 1 ) finalString = no.slice(0,0);  
    
    if (noLength > 15 && noLength < 18 ) finalString = finalString.concat(" Quintrillions Kilometers");
    else if ( noLength === 18 ) finalString = finalString.concat(" Quintrillion Kilometers");  
    else if (noLength > 12 && noLength <= 15) finalString = finalString.concat(" Quadrillions Kilometers");
    else if (noLength === 15) finalString = finalString.concat(" Quadrillion Kilometers");
    else if (noLength > 9 && noLength <= 12) finalString = finalString.concat(" Billions Kilometers");
    else if (noLength === 12) finalString = finalString.concat(" Billion Kilometers");
    else if (noLength > 6 && noLength <= 9 ) finalString = finalString.concat(" Millions Kilometers");
    else if (noLength === 9 ) finalString = finalString.concat(" Million Kilometers");
    else if (noLength > 3 && noLength <= 6 ) finalString = finalString.concat(" Thousands Kilometers");
    else if (noLength === 6 ) finalString = finalString.concat(" Thousand Kilometers");
    else finalString = finalString.concat('  Kilometers');

    return finalString;
    
}   

function printFinalRez(){
    const planet = chooseRandomPlanet();
    const topic = chooseRandomTopic();
    const value = chooseRandomValue(topic);
    let noToStr = transformNOintoStr(value);

    if (topic === 'orbitDistanceKm')
    {
        return `${planet} orbits the Sun at an average distace of ${value} (${noToStr}),according to NASA's Goddard Space Flight Center.`;
    }
    else if(topic === 'equatorialRadiusKm')
    {
        return `The radius of ${planet} at the equator is ${value} (${noToStr}),according to NASA's Goddard Space Flight Center.`;
    }
    else if (topic === 'volumeKm3'){
        //noToStr = noToStr.slice(0, noToStr);
        noToStr = noToStr.concat(' cubic Kilometers');

        return `${planet} has a volume of ${value} (${noToStr}),according to NASA's Goddard Space Flight Center. `
    }
    else return 'try again!'

}

console.log(printFinalRez());

