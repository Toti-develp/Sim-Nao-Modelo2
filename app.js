
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

const button = document.getElementById('no');

button.addEventListener('mouseover', function ( ) {
    button.style.position = "absolute";
    button.style.transition = 0.1 + "s";
    button.style.top = Math.random( ) * height + "px";
    button.style.left = Math.random( ) * width + "px";
});



