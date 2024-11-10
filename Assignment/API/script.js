let url= "https://swapi.dev/api/people/1/";

 async function getdata(){
    try {
     let res = await fetch(url);
     console.log(res);
     let data = await res.json();
     setTimeout(()=>{
        let name = document.getElementById('name');
        name.innerText = data.name
        let gender = document.getElementById('gender');
        gender.innerText = data.gender.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        let height = document.getElementById('height');
        height.innerText = data.height
     },2000)
     
    } catch (error) {
     console.log("error ",e);
     
    }
 }
getdata();