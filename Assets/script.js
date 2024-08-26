let Dateipt = document.querySelector('.DateInput');
let FindBtn = document.querySelector('.FindButton');
let DisplayResult = document.querySelector('.DayDisplay');
let GivenDis = document.querySelector('.GivenDis');

FindBtn.addEventListener('click', () => {
  let Dateval = Dateipt.value;
  let date = new Date(Dateval);
  
  let day = date.getDay();
  let Givendate = date.getDate();

  if(Dateval == null || Dateval == ''){
    alert('Enter a date');
  }

  else if(day == 0){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Sunday`;
  }
  
  else if(day == 1){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Monday`;
  }
  
  else if(day == 2){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Tuesday`;
  }
  
  else if(day == 3){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Wednesday`;
  }
  
  else if(day == 4){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Thursday`;
  }
  
  else if(day == 5){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Friday`;
  }
  
  else if(day == 6){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> is Saturday`;
  }
});