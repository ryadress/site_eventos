const targetDate = new Date("2024-11-07T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const Distance = targetDate- now;

    const days = Math.floor(Distance / (1000 * 60 * 60 * 24 ));
    const hours = Math.floor((Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    const minutes = Math.floor ((Distance % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor ((Distance % (1000 * 60 ))/ 1000); 

    document.getElementById("time-birthday").innerHTML = `${days}d ${hours}h ${minutes}min ${seconds}s`
    if (Distance< 0) {
        document.getElementById("time-birthday").innerHTML = "Feliz Aniversário!";
    }
}

setInterval(updateCountdown, 1000);
