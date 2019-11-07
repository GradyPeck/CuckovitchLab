let name = "Grady Peck";
let age = 25;
let birthday = "March 9th";
let detroitGC = false;
let lifeEvents = [
    "I was born in Pontiac, Michigan.",
    "I went to Hampshire College for about thirty seconds.",
    "I was on a champion quiz bowl team in high school, which wasn't nerdy at all.",
    "I just moved to Grand Rapids."
]
//opening statement
if(detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
//print out the life events
for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}
let counter = 0;
let rando = 0;
while(true){
    rando = Math.floor(Math.random()*10 + 1);
    if(rando === 5){
        counter ++;
        console.log(`${rando} === 5. It took ${counter} iterations to randomly generate the number 5.`)
        break;
    }
    else {
        console.log(`${rando} !=== 5`);
        counter++;
    }
}