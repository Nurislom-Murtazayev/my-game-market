let dy = document.querySelector(".day h1")
let hr = document.querySelector(".hour h1");
let mn = document.querySelector(".min h1");
let sc = document.querySelector(".sec h1");

function uptade(){
  let tomorrov = new Date('Jun 29 2023 00:00:00').getTime();
    let now = new Date().getTime();
    let farq = tomorrov - now;
    // Days
    let days = Math.floor(farq / (1000 * 60 *60 *24));
    // hours
    let hours = Math.floor(farq / (1000 * 60 *60) % 24);
    //Minutes
    let minutes = Math.floor(farq / (1000 * 60) % 60);
    // Secundes
    let secundes = Math.floor(farq / (1000)  % 60);
    if(days < 10)
    {
        days = `0${days}`
    }
    if(hours < 10)
    {
        hours = `0${hours}`
    }
    if(minutes < 10)
    {
        minutes = `0${minutes}`
    }
    if(secundes < 10)
    {
        secundes = `0${secundes}`
    }

    dy.innerText = days;
    hr.innerText = hours;
    mn.innerText = minutes;
    sc.innerText = secundes;
    console.log(days, hours, minutes, secundes);
}
uptade() ;
setInterval(uptade, 1000);

console.log("och");