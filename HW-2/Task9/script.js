// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let h1 = document.getElementById('h1');


let g = prompt('To receive the day list, please enter the name of the day: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
switch (g){
    case  'Monday':
    case  "monday":
        (h1.innerText="dayOff1");
    break
    case  'Tuesday' || "tuesday":(h1.innerText="dayOff2");
        break
    case  'Wednesday' || "wednesday":(h1.innerText="dayOff3");
        break
    case  'Thursday' || "thursday":(h1.innerText="dayOff4");
        break
    case  'Friday' || "friday":(h1.innerText="dayOff5");
        break
    case  'Saturday' || "saturday":(h1.innerText="dayOff6");
        break
    case  'Sunday' || "sunday":(h1.innerText="dayOff7");
    default: (alert("unknown value"))
}