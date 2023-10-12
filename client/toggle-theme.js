const body = document.querySelector('body');
const header = document.querySelector('header');
const searchInput = document.querySelector('#city');
const weatherBox = document.querySelectorAll('.weather-box');

const toggleThemeButton = document.querySelector('#toggle-theme');

const allItems = [body, header, searchInput, weatherBox];

toggleThemeButton.addEventListener('change', ()=>{
    if(toggleThemeButton.checked){
        addDarkTheme();
    }else{
        removeDarkTheme();
    }
})

function addDarkTheme(){
    allItems.forEach(item => {item.classList.add('dark-theme')})
}

function removeDarkTheme(){
    allItems.forEach(item => {item.classList.remove('dark-theme')})
}

allItems.forEach(item => {
    console.log(item)
})