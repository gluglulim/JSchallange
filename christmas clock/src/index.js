const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const now = new Date();
    const christmasEve = new Date(now.getFullYear(), 11, 24, 0, 0, 0);

    const difference = christmasEve - now;

    if (difference > 0) {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

        clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clockTitle.innerText = "Merry Christmas!";
    }
}

getClock();
setInterval(getClock, 1000);