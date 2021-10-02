// task01////

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1.name===obj2.name && obj1.age=== obj2.age){
  console.log(true);
}


// task02

const getCountries = () => {
  const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.response = "json";

xhr.send();


xhr.onload = () => {
   const data = xhr.response;
   console.log(data);
 
   const result = JSON.parse(data)
   .map((country) => ({
     name: country.name,
     region: country.region,
     subregion: country.subregion,
     population: country.population
   }))
   console.log(result);
}
}

getCountries();



const getflags = () => {
  const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.response = "json";

xhr.send();


xhr.onload = () => {
   const data = xhr.response;
   console.log(data);

const UserList = document.querySelector('.flag-display');
 
   const result = JSON.parse(data)
   .forEach((user) => {
    UserList.innerHTML += `<img class="user-pic" src="${user.flag}"/>`
})
   console.log(result);
}
}


getflags();








// function ProgressCountdown(timeleft, text) {
//   return new Promise((resolve, reject) => {
//     var countdownTimer = setInterval(() => {
//       timeleft--;

     
//       document.getElementById(text).textContent = timeleft;

//       if (timeleft <= 0) {
//         clearInterval(countdownTimer);
//         resolve(true);
//       }
      
//     }, 1000);
    
//   });
// }

// ProgressCountdown(10,  'pageBeginCountdownText').then(value => document.write(`Happy New Year`));



// var number = 10;

// setTimeout(() => {
//  var count = document.getElementById("head");
//  count.innerHtml = number;
//  setTimeout(() => {
//   var count = document.getElementById("head");
//   count.innerText = number--;
//   setTimeout(() => {
//    var count = document.getElementById("head");
//    count.innerText = number--;
//    setTimeout(() => {
//     var count = document.getElementById("head");
//     count.innerText = number--;
//     setTimeout(() => {
//      var count = document.getElementById("head");
//      count.innerText = number--;
//      setTimeout(() => {
//       var count = document.getElementById("head");
//       count.innerText = number--;
//       setTimeout(() => {
//        var count = document.getElementById("head");
//        count.innerText = number--;
//        setTimeout(() => {
//         var count = document.getElementById("head");
//         count.innerText = number--;
//         setTimeout(() => {
//          var count = document.getElementById("head");
//          count.innerText = number--;
//          setTimeout(() => {
//           var count = document.getElementById("head");
//           count.innerText = number--;
//           setTimeout(() => {
//             var count = document.getElementById("head");
//             count.innerText = number--;
//           setTimeout(() => {
//            var count = document.getElementById("head");
//            count.innerText = "Happy Independence Day...!!!";
//            },1000);
//           },1000);
//          },1000);
//         },1000);
//        },1000);
//       },1000);
//      },1000);
//     },1000);
//    },1000);
//   },1000);
//  },1000);
// },1000);


