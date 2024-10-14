const URL = "https://catfact.ninja/fact";
let fact = document.querySelector('#cat-fact');
let size = document.querySelector('#fact-length')


// BY PROMISES 
fetch(URL).then((res) =>{
    console.log(res);
    res.json().then((value)=>{
        fact.innerText = value.fact;
    });

}).catch((err)=>{
    console.log("ERROR:", err);
})

// BY ASYNC AWAIT 
// const getData = async (URL) => {
//     // fetch technically returns a promise
//     let response = await fetch(URL);
//     let data = await response.json();
//     fact.innerText = data.fact;
//     size.innerText = data.length;
// }
// getData(URL);
