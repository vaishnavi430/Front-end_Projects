// Set the target date and time for the countdown
// You can change this to any future date/time
const targetDate = new Date("December 31, 2025 23:59:59").getTime();

const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const timerDiv = document.getElementById("timer");
const countdownMessageDiv = document.getElementById("countdown-message");

let countdownInterval; // Declare it globally so clearInterval can access it

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        // Calculate time units
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML elements, ensuring two digits
        daysSpan.innerText = days.toString().padStart(2, "0");
        hoursSpan.innerText = hours.toString().padStart(2, "0");
        minutesSpan.innerText = minutes.toString().padStart(2, "0");
        secondsSpan.innerText = seconds.toString().padStart(2, "0");

        // Add pulse animation to seconds for visual feedback
        if (secondsSpan.parentElement) {
            secondsSpan.parentElement.classList.toggle('pulse', seconds % 2 === 0);
        }

    } else {
        // Countdown has finished
        clearInterval(countdownInterval);
        timerDiv.classList.add('hidden'); // Hide the timer
        countdownMessageDiv.classList.remove('hidden'); // Show the message
    }
}

// Initial call to prevent delay before the first update
updateCountdown();

// Set up the interval to update the countdown every second
countdownInterval = setInterval(updateCountdown, 1000);