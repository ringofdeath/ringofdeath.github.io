//script menu js

function changeMenu(){
  const parent1 = document.querySelector('.menuSelection');
  activeMenu = parent1.classList.contains('visible');
  hiddenMenu = parent1.classList.contains('hidden');
  if(hiddenMenu){
    parent1.classList.remove('hidden');
    parent1.classList.add('visible');
  }
  else{
    parent1.classList.remove('visible');
    parent1.classList.add('hidden');
  }
}

const button = document.getElementById('dropdownButton');
button.addEventListener('click',changeMenu)