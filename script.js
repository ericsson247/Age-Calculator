const agebutton1 = document.querySelector('.agebutton');
const box2 = document.querySelector('.box2');
const box1 = document.querySelector('.box1');
const summit = document.querySelector('.summit');
const box3 = document.querySelector('.box3');

agebutton1.addEventListener('click', function(){
    box2.classList.remove('hidden');
    box1.classList.add('hidden');
})

summit.addEventListener('click', function(e){
    e.preventDefault();

    var fName, sName, age;
    const displayAge = document.querySelector('#output');

    fName = document.getElementById("aName").value;
    sName = document.getElementById("bName").value;
    age = document.getElementById("cAge").value; 

    if (fName === " " || sName === " " || age === ""){
        alert("Please, fill in your details");
        return;
    }else{
        displayAge.value = `${age * 365} days`;
    }
    box2.classList.add('hidden');
    box1.classList.add('hidden');
    box3.classList.remove('hidden');
})
