const profilePic = document.querySelector('#profile-pic');
const profileName = document.querySelector('#profile-name');
const profileBio = document.querySelector('#profile-bio');

const inputPic = document.querySelector('#pic-input');
const inputName = document.querySelector('#name-input');
const inputBio = document.querySelector('#bio-input');

const updateButton = document.querySelector('#update-button');

updateButton.addEventListener('click', () => {
    if (inputName.value.trim() && inputBio.value.trim()) { 
        profileName.innerText = inputName.value;
        profileBio.innerText = inputBio.value;
        
        if (inputPic.value) {
            profilePic.src = inputPic.value;
        }
        
    } else {
        alert('Please enter valid name and bio.');
    }
});