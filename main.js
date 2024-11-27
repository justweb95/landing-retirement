const nextBtn = document.getElementById('next');
var form = document.getElementsByName('problem');
var answer;

// Copyright year auto update
document.querySelector('#copyright-year').innerText = new Date().getFullYear();




nextBtn.addEventListener('click', ()=>{
  form.forEach(element => {
    if (element.checked) {
      answer = element.value;
    }
  })
  alert(`The form has been submitted. Your answer is: ${answer}`)
  window.location.href="./pages/thank-you/thanks.html";
})


// Start video function
window.addEventListener('scroll', ()=>{
  const scrol = document.documentElement.scrollTop;

  if(scrol > 650 && scrol < 2000){
    console.log('Video will start now');
  }
})