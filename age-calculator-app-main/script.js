const Ageday = document.querySelector(".day");
const Agemonth = document.querySelector(".month");
const Ageyear = document.querySelector(".year");


const day_error = document.querySelector(".day-error");
const month_error = document.querySelector(".month-error");
const year_error = document.querySelector(".year-error");


const btn = document.querySelector(".btn");


const d_insert = document.querySelector(".d-input");
const m_insert = document.querySelector(".m-input");
const y_insert = document.querySelector(".y-input");


const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

function DisplayError(value, errorClass, condition, text) {
    console.log("Input Value:", value);
    console.log("Condition:", condition);

    const inputValue = parseInt(value);
    const numericCondition = parseInt(condition);

    console.log("Numeric Input Value:", inputValue);
    console.log("Numeric Condition:", numericCondition);

    if (inputValue > numericCondition) {
        errorClass.innerText = text;
        errorClass.style.color = "red";
        return true;
    } else {
        errorClass.innerText = "";
        return false;
    }
}



btn.addEventListener("click", function() {
    const dayError = DisplayError(Ageday.value, day_error, 31, "Invalid Day");
    const monthError = DisplayError(Agemonth.value, month_error, 12, "Invalid Month");
    const yearError = DisplayError(Ageyear.value, year_error, currentYear, "Invalid Year");

    if (!dayError) { 
        const inputDay = parseInt(Ageday.value); // Convert to integer
        if (currentDay > inputDay) {
            d_insert.textContent = currentDay - inputDay;
        } else {
            currentDay += 30;
            currentMonth--;
            d_insert.textContent = currentDay - inputDay;
            console.log("Day Difference (Negative):", currentDay - inputDay);
        }
    }
    
    if (!monthError) {
        const inputMonth = parseInt(Agemonth.value); // Convert to integer
        if (currentMonth > inputMonth) {
            m_insert.textContent = currentMonth - inputMonth;
        } else {
            currentMonth += 12;
            currentYear--;
            m_insert.textContent = currentMonth - inputMonth;
            console.log("Month Difference (Positive):", currentMonth - inputMonth);
        }
    }
    if (!yearError) {
        y_insert.textContent = currentYear - Ageyear.value;
    }
});