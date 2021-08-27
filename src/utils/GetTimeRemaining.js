export const getTimeRemaining = (countdownDate) => {
  if (countdownDate) {
    // Get the current time
    const currentTime = new Date().getTime();

    // Get the time remaining until the countdown date
    const distanceToDate = countdownDate - currentTime;

    // Calculate days, hours, minutes and seconds remaining
    let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      return false;
    }
    // Return the new time
    return { days: days, hours: hours, minutes, seconds };
  }
};
