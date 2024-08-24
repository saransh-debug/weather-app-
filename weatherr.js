
const apikey = '7d6d0bc8e54254e0f2fd410f0a9e7cef';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather';

let chklocation;
let url;
const temp= document.querySelector(".temp")
const locationelement = document.querySelector(".location")
const windspeed= document.querySelector(".windspeed")
const time = document.querySelector(".time")
const button= document.querySelector(".search")
const searchbar= document.querySelector("#searchbar")

button.addEventListener('click',function(){
    chklocation = searchbar.value;

    if(chklocation)
    {
        getdata(chklocation);
    }
})

function getdata(chklocation){
    url = `${apiurl}?q=${chklocation}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response => { 
        return response.json()})
    .then(data =>
    {
        locationelement.innerHTML = `${data.name} ,${data.sys.country}`;
        windspeed.innerHTML=`wind speed ${data.wind.speed}m/s`;
        temp.innerHTML=`temperature :${data.main.temp}*c`;
        time.innerHTML=`timezone ${data.timezone/3600} hrs`;
    }
        

    ).catch(error => {
        console.error("error");
    })
}