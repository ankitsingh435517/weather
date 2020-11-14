let loc = document.getElementById("Location");
let tempIcon=document.getElementById("temp-icon");
let tempValue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
window.addEventListener("load",() =>{
let long;
let lat;

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
          long= position.coords.longitude;
          lat= position.coords.latitude;
          const proxi ="https://cors-anywhere.herokuapp.com/";
          const api= `${proxi}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9898ad564f74fd1e0f5b131ed6060c7e`;
          
           fetch(api)
           .then((response)=>{
              return response.json();
           })
           .then(data=>{
               const {name}=data;
               const {feels_like}=data.main;
               const {id,main}=data.weather[0];
               loc.textContent= name;
               climate.textContent= main;
               tempValue.textContent=Math.round(feels_like-273);
               if(id<250)
               {
                   tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/263/263884.svg"
               }
               else if(id<350)
               {
                tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/1281/1281211.svg"
               }
               else if(id<550)
               {
                tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/1357/1357172.svg"
               }
               else if(id<650)
               {
                tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/1200/1200430.svg"
               }
               else if(id<800)
               {
                tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/899/899685.svg"
               }
               else if(id===800)
               {
                tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/3026/3026455.svg"
               }
               else if(id>800)
               {
                   tempIcon.src= "https://www.flaticon.com/svg/static/icons/svg/414/414927.svg"
               }
               console.log(data);
           })
        })
  }
})