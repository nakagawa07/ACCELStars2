// Header
const header = document.querySelector('header');

window.addEventListener("load", () => {
    document.body.style.paddingTop = `${header.offsetHeight}px`;
});

// Service Worker
if ('serviceWorker' in navigator && activeSW) {
    navigator.serviceWorker.register('/sw.min.js', { scope: '/' }).then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
        console.log('ServiceWorker registration failed: ', err);
    });
}



$(function () {
  $('.menu').on('click', function () {
    $(this).toggleClass('active');
    $("#nav").toggleClass('active');
  })
}) $(function () {
  $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
    $(".menu").toggleClass('active');
  })
});