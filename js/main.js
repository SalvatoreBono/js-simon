//impostare la data per il conto alla rovescia
const countDownDate = new Date("July 14, 2023 09:30:00").getTime();

const timeUpdate = setInterval(function () {
    //ottenere la data e l'ora di oggi
    const now = new Date().getTime();

    //per ottenere il tempo rimanente
    const timeRemaining = countDownDate - now;

    //Calcolo ore, minuti e secondi
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("count-down-date").innerHTML = hours + ":"
        + minutes + ":" + seconds;

    if (timeRemaining < 0) {
        //bloccare il timer al termine del countdown
        clearInterval(timeUpdate);
        document.getElementById("count-down-date").innerHTML = "Inizio Lezione";
    }
    //aggiornare la data ogni 1000ms
}, 1000);