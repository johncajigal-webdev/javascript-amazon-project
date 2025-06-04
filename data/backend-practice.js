const xhr = new XMLHttpRequest(); //creates a new HTTP message/request to send to the backend 

xhr.addEventListener('load', ()=> {
  console.log(xhr.response);
})

xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg"); 
xhr.send(); //asynchronous code


