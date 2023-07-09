//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 
'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 
'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];


//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "January";
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if (month === 'มกราคม' || month === 'มีนาคม' || 
    month === 'พฤษภาคม' || month === 'กรกฎาคม' || 
    month === 'สิงหาคม' || month === 'ตุลาคม' || 
    month === 'ธันวาคม') {
        dayNum = 31;
    } else if (month === 'เมษายน' || month === 'มิถุนายน' || 
           month === 'กันยายน' || month === 'พฤศจิกายน') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear() + 543;
    //Make the previous 100 years be an option
    for(let i = 0; i < 4; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();
var date = '';

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
    date = daySelect.value + ' ' + monthSelect.value + " " + yearSelect.value;
    document.getElementById("date").innerHTML = date;
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
    date = daySelect.value + ' ' + monthSelect.value + " " + yearSelect.value;
    document.getElementById("date").innerHTML = date;
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
    date = daySelect.value + ' ' + monthSelect.value + " " + yearSelect.value;
    document.getElementById("date").innerHTML = date;
}

// const currentDate = new Date();
// const previousDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
// yearSelect.value = yearSelect.value.toString();
// monthSelect.value = months[previousDate.getMonth()];
// daySelect.value = (previousDate.getDate()+1).toString();

// Import the axios library

