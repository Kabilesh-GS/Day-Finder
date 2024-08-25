let Dateipt = document.querySelector('.DateInput');
let FindBtn = document.querySelector('.FindButton');

FindBtn.addEventListener('click', () => {
  let Dateval = Dateipt.value;
  let date = new Date(Dateval);
  
  let day = date.getDay();

  if(Dateval == null || Dateval == ''){
    alert('enter date');
  }

  else if(day == 0){
    console.log('Sunday');
  }
  
  else if(day == 1){
    console.log('Monday');
  }
  
  else if(day == 2){
    console.log('Tuesday');
  }
  
  else if(day == 3){
    console.log('Wednesday');
  }
  
  else if(day == 4){
    console.log('Thursday');
  }
  
  else if(day == 5){
    console.log('Friday');
  }
  
  else if(day == 6){
    console.log('Saturday');
  }
});