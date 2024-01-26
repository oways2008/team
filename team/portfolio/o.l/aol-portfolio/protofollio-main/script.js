let valuedisplays = document.querySelectorAll(".num");
let interval = 5000;

valuedisplays.forEach(valuedisplay =>{
    let startvalue = 0;
    let endvalue = parseInt(valuedisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function() {
     startvalue += 1; 
     valuedisplay.textContent = startvalue ;
     if (startvalue == endvalue){
        clearInterval(counter);

     }  
    },duration);
})
const inputs = document.querySelectorAll(".input-contact");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});