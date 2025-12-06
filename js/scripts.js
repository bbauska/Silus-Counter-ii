/* ./js/scripts.js in silus-counter-3 of silus-counter-3.bauska.org */
/* 
   dd/mm/yy = 0 */
let counter = 0;
/* all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
