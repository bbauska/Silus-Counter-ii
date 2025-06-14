/* ./js/scripts.js in silus-count-II of silus-counter-ii.bauska.org */
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
