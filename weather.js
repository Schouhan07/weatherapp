const temperatureField=document.querySelector(".weather1");
const loactionField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const imgField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");

form.addEventListener("submit", search);

let target="mumbai";

const fetchData=async(target)=>{
try {
    const url=`https://api.weatherapi.com/v1/current.json?key=5dd77bc887ed4e31afe101357240603&q==${target}`

const response=await fetch(url);
const data=await response.json();
console.log(data);
const {
    current:{
        temp_c,
        condition:{text,icon},
    },
    location:{name,localtime},
}=data;
updateDom(temp_c,name,icon,text,localtime);
} catch (error) {
    alert("location not found");
}

};

function updateDom(temperate,city,image,text,timedate){
    temperatureField.innerText=temperate;
    loactionField.innerText=city;
    imgField.src=image;
    weatherField.innerText=text;
    
    const exactTime=timedate.split(" ")[1];
    const exactDate=timedate.split(" ")[0];
    const exactDay=getDayvalue(new Date(exactDate).getDay());
    dateField.innerText=`${exactTime}-  ${exactDay} ${exactDate}`;
}
fetchData(target);

function search(e) {
    e.preventDefault();
  
    target= searchField.value;
  
    fetchData(target);
  }


function getDayvalue(num){
    switch(num){
        case 0:
            return "sunday";
        case 1:
            return "Monday";
        case 2:
                return "Tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday";
        default:
            return "Error";
    }
 }
