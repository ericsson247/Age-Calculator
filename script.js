const agebutton1 = document.querySelector('.agebutton');
const box2 = document.querySelector('.box2');
const box1 = document.querySelector('.box1');
const summit = document.querySelector('[type = "submit"]');
const box3 = document.querySelector('.box3');

agebutton1.addEventListener('.agebutton', function(){
box2.classList.remove('hidden');
box1.classList.add('hidden');
})

