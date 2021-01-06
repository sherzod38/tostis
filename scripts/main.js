var btnToast = document.querySelector('.btn-toast')
var toast = document.querySelector('.toast')
btnToast.addEventListener('click', function() {
  toast.classList.add('show')
})

var btnCloze = document.querySelector('.closes')
btnCloze.addEventListener('click', function(){
  toast.classList.remove('show')
})
// console. log('Hello world!');



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})

var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('shown.bs.toast', function () {
  // do something...
  myToastEl.toast('show');
})
