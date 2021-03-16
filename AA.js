 async function getRandomNumber(){
     let promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve(Math.floor(Math.random()*55)), 500)
     });
     let result = await promise;
     console.log(result);
 }
 getRandomNumber();


 async function city(cityName) {
     fetch (`https://geocode.xyz/${cityName}?json=1`)
     .then(response => response.json())
     .then(result => {
         console.log(result);
         console.log(`The latitude is ${result.latt}`);
         console.log(`The longitude is ${result.longt}`);
     })
     .catch(error => console.log('error', error));
 }

 city('conover')