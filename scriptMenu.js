//script menu js

function changeMenu(){
  const parent1 = document.querySelector('.menuSelection');
  activeMenu = parent1.classList.contains('visible');
  hiddenMenu = parent1.classList.contains('hidden');
  buttonClicked();
  if(hiddenMenu){
    parent1.classList.remove('hidden');
    parent1.classList.add('visible');
  }
  else{
    parent1.classList.remove('visible');
    parent1.classList.add('hidden');
  }
}
function buttonClicked(){
  const button1= document.getElementById('dropdownButton');
  console.log('Button Clicked Start');
  for (let index = 0; index < 5; index++) {
    button1.style.width -= "10px";
    button1.style.height -= '10px';
    console.log('Loop');
  }
  console.log('Button Function End.');
}
console.log('Outside')

const button = document.getElementById('dropdownButton');
button.addEventListener('click',changeMenu)