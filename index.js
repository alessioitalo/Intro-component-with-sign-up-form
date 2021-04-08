function validate(){

const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll('.form-inputs')

  form.addEventListener('submit', function(e){
    e.preventDefault();
    inputs.forEach('submit', function(){
      if(input.value === "" || input.value === null){
        console.log('error')
        input.parentElement.classList.add('error');
      }else{
        input.parentElement.classList.remove('error');
      }
    });
  });
};
