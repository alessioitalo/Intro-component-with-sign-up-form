const form = document.querySelector('.contact-form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const mail = document.querySelector('#mail');
const pwd = document.querySelector('#pwd');



function errorFunc(element){
  element.classList.remove('valid')
  element.classList.add('error');
}

function correctFunc(element){
  element.classList.remove('error')
  element.classList.add('valid');
}

function validateFirstName(){
  if (fname.value.length < 1){
    errorFunc(fname)
    document.getElementById('fnamespan').style.display = 'inline';
  }else{
    document.getElementById('fnamespan').style.display = 'none';
    correctFunc(fname)

}}

function validateLastName(){
  if (lname.value.length < 1){
    errorFunc(lname)
    document.getElementById('lnamespan').style.display = 'inline';
  }else{
    document.getElementById('lnamespan').style.display = 'none';
    correctFunc(lname)
}}

function validatePassword(){
  if (pwd.value.length < 8 || pwd.value.length > 30){
    errorFunc(pwd)
    document.getElementById('pwdspan').style.display = 'inline';
  }else{
    correctFunc(pwd)
}}

function validateEmail(){
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)){
  // if (mail.value.length < 2){
    document.getElementById('mailspan').style.display = 'none';
    correctFunc(mail)
  }else{
    errorFunc(mail)
    document.getElementById('mailspan').style.display = 'inline';
}}

function validateForm(){
form.addEventListener('click', (error) => {
  error.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
})};
