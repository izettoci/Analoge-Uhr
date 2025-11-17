/*
 * Created on Mon Nov 17 2025
 *
 * Copyright (c) 2025 Izet Toci
 */

// Get hour, minute and seconds from HTML
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
// Function to update the clock hands
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Read the current second, minute and hour values
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  // Calculate the degree for rotation for each hand
  const secondDeg = second * 6;
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  // Apply the rotation to each hand
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
// Initial call to set the clock hands
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);
