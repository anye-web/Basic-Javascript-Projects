"use strict";

// Ui Element

const giveaway = document.querySelector(".give");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-content h4 ");

function countDownTimer() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  // let futureDate = new Date(2022, 8, 29, 14, 13, 0);
  let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 2, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();

  const min = mins < 10 ? `0${mins}` : mins;

  const timeOfDay = hours >= 12 ? "PM" : "AM";

  let month = futureDate.getMonth();
  month = months[month];

  let day = futureDate.getDay();
  day = weekDays[day];

  const date = futureDate.getDate();

  giveaway.textContent = `Giveaway ends on ${day} ${date}, ${month} ${year} at ${hours}:${min}${timeOfDay}`;

  // Future time in ms
  const futureTime = futureDate.getTime();

  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    //  1s = 1000ms
    //  1m = 60s
    //  1hr = 60min
    //  1d = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinutes = 60 * 1000;
    const second = 1000;

    let days = Math.floor(t / oneDay);

    let hours = Math.floor((t % oneDay) / oneHour);

    let minutes = Math.floor((t % oneHour) / oneMinutes);

    let seconds = Math.floor((t % oneMinutes) / second);

    // Set Values
    const value = [days, hours, minutes, seconds];

    function format(item) {
      return item < 10 ? `0${item}` : item;
    }

    // Assigning all the element
    items.forEach((item, index) => {
      item.innerHTML = format(value[index]);
    });

    // This is to clear the count down when it reaches the set time

    if (t < 0) {
      clearInterval(countDown);
      deadline.innerHTML = `<h4 class="expire">Sorry this giveaway has Expired</h4>`;
    }
  }

  // Countdown
  let countDown = setInterval(getRemainingTime, 1000);

  getRemainingTime();
}

countDownTimer();
