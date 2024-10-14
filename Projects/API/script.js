const URL= "https://swapi.dev/api/people/1/";
let name = document.getElementById('name');
let gender = document.getElementById('gender');
let height = document.getElementById('height');
async function getData(){
    try {
     let response = await fetch(URL);
     let data = await response.json();

        name.innerText = data.name;
        gender.innerText = data.gender;
        height.innerText = data.height;
    } catch (error) {
     console.log("error ",error);
    }
}
getData();