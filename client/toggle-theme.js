const toggleThemeBtn = document.querySelector('.toggle-theme');

const lightDarkTheme = document.querySelectorAll('.dark-light-theme');
const inputCity = document.querySelector('#city');
const darkTheme = document.querySelector('.section');


toggleThemeBtn.addEventListener('change', () => {
    if(toggleThemeBtn.checked){
        lightDarkTheme.forEach(element => {element.style.background = '#242424'});
        inputCity.style.background = '#D9D9D9';
        inputCity.style.color = '#404040'
        darkTheme.style.background = '#090909'
    }else{
        lightDarkTheme.forEach(element => {element.style = ''});
        inputCity.style = ''
        darkTheme.style = ''
    }
})