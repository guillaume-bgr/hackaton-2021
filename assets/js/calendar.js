// Getting current date

let date = new Date()
today = date.getDate().toString() + '/' + (date.getMonth()+1).toString()
document.querySelector('.date').innerHTML = today;
console.log(today);
// Adding calendar cases
for (let i = 1; i <= 24; i++) {
    document.querySelector('.main').innerHTML = 
    document.querySelector('.main').innerHTML + 
    `<div class="case" data-date="`+ i +`/12">
    <p>`+i+`/12</p>
    <button>Ouvrir !</button>
    </div>`;
}
document.getElementsByClassName('case')[date.getDate()-1].scrollIntoView({ behavior: 'smooth', block: 'center'});


