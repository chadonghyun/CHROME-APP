const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDNEN_CLASSNAME = 'hidden';
const USERNAME_KEY ='username';

function onloginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDNEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  // greeting.innerText = "Hello!!" + loginInput.value;
  paintGreetings(username);
}

function paintGreetings(username){
  // const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello!! ${username}`;
  greeting.classList.remove(HIDDNEN_CLASSNAME);
}
// loginForm.addEventListener('submit',onloginSubmit);



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDNEN_CLASSNAME);
  loginForm.addEventListener('submit', onloginSubmit);
}else{
  paintGreetings(savedUsername);
}