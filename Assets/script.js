let Dateipt = document.querySelector('.DateInput');
let FindBtn = document.querySelector('.FindButton');
let DisplayResult = document.querySelector('.DayDisplay');
let GivenDis = document.querySelector('.GivenDis');
let ErrorDis = document.querySelector('.Error');

FindBtn.addEventListener('click', () => {
  let Dateval = Dateipt.value;
  let date = new Date(Dateval);

  let day = date.getDay();
  let Givendate = date.getDate();
  let GivenMonth = date.getMonth();

  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if(Dateval == null || Dateval == ''){
    ErrorDis.innerHTML = `Enter a Date`;
    setTimeout(() => {
      ErrorDis.innerHTML = ``;
    },3000);
  }

  else if(day == 0){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Sunday !`;
  }
  
  else if(day == 1){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Monday !`;
  }
  
  else if(day == 2){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Tuesday !`;
  }
  
  else if(day == 3){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Wednesday !`;
  }
  
  else if(day == 4){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Thursday !`;
  }
  
  else if(day == 5){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Friday !`;
  }
  
  else if(day == 6){
    DisplayResult.innerHTML = `${Givendate}<sup>th</sup> of ${monthArr[GivenMonth]} is Saturday !`;
  }
});