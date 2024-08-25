let Dateipt = document.querySelector('.DateInput');
let FindBtn = document.querySelector('.FindButton');

FindBtn.addEventListener('click', () => {
  let Dateval = Dateipt.value;
  console.log(Dateval);
  let date = new Date(Dateval);
  
  console.log(date.getDay());
  console.log(date.getMonth());
});