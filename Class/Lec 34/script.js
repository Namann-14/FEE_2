const button = document.querySelector('#likeButton'); 
const likeCount = document.querySelector('#likeCount'); 
const para = document.querySelector('#para');
let count = 0;
const originalText = para.innerText;

button.addEventListener('click', () => {
    count++;
    updateDisplayCount(count);
});

const updateDisplayCount = (count) => {
    likeCount.innerText = count; 
};

para.addEventListener('mouseenter', ()=>{
    para.innerText = 'Mouse Hover'
});

para.addEventListener('mouseleave', () => {
    para.innerText = originalText;
});