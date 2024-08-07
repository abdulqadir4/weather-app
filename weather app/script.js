let search = document.getElementById('search')
let btn = document.getElementById('btn')
let API_KEY = "4831873056f7e4ddb259706e75804d17";
let box = document.querySelector( `.box`);


function fetchData() {
   if(search.value.trim() == ""){
        alert("input is empty")
   }
        else{
            box.innerHTML  = `<p>loading</p>`

            let url= `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${API_KEY}`

    fetch(url)
    .then((res) => {
         return res.json();
        })
         .then((data) => {
           showdata(data);
         })
         .catch((err) =>{
            console.log(err);
         })
   }

 
} 
let body = document.querySelector('body');



function showdata(data){
    console.log(data);

    const {country} = data.sys;
    const { temp }  = data.main;

 let updatedTemp = Math.floor(temp)
 let { main, icon , id } = data.weather[0];
 let urlImg;
 
        if( id >= 200 && id <= 232) {
            urlImg = './assets/images/storm.png'
           body.className= 'thunderstorm'
        }

         else  if( id >= 300 && id <= 321) {
            urlImg = './assets/images/drizzle.png'
             body.className='drizzler'
        }
        

        else  if( id >= 500 && id <= 531) {
            urlImg = './assets/images/rain.png'
             body.className='rain'
        }

        else  if( id >= 600 && id <= 622) {
            urlImg = './assets/images/snowy.png'
             body.className='snow'
        }

        else  if( id >= 701 && id <= 781) {
            urlImg = './assets/images/clear-sky.png'
             body.className='clouds'
        }

        else  if( id >= 801 && id <= 804) {
            urlImg = './assets/images/clouds (1).png'
             body.className='cloudy'
        }

        else{
             urlImg = './assets/images/sun.png'
              body.className='sun'
        }

    box.innerHTML = `
                  <img src="${urlImg}"/>
            <p>${data.name},${country}</p>
         <h1>${updatedTemp} <sup>0</sup>C</h1>
            <p> ${ main }   </p>

            
            
            
            
            `
            
}

btn.addEventListener('click',fetchData);


//<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">