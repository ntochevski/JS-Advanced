function solve(speed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    let speedLimit = speedLimits[area];
    let typeOfSpeeding = '';

        if (speed <= speedLimit ) {
            console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
            return;
        }else if(speed - speedLimit <= 20){
            typeOfSpeeding = 'speeding';
        }else if (speed - speedLimit <= 40) {
            typeOfSpeeding = 'excessive speeding';
        }else {
            typeOfSpeeding = 'reckless driving';
        }
        
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimits[area]} - ${typeOfSpeeding}` );
}

solve(200, 'motorway' );