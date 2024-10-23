function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Get current date and time
    document.getElementById('datetime').textContent = dateTimeString;
}

// Update the date and time on page load
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);
