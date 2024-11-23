// Recupera il display
const display = document.getElementById("display");

// Aggiunge il simbolo o numero al display
function aggiungiSimbolo(simbolo) {
    if (display.value === "0") {
        display.value = simbolo; // Sostituisce lo zero iniziale
    } else {
        display.value += simbolo; // Aggiunge al valore corrente
    }
}

// Cancella il contenuto del display
function cancella() {
    display.value = "0";
}

// Quando il form viene inviato
document.getElementById("form-calcolatrice").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene il comportamento di invio predefinito

    const espressione = display.value;

    // Invio dell'espressione al server tramite fetch
    fetch("calcolatrice.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `espressione=${encodeURIComponent(espressione)}`,
    })
        .then((response) => response.text())
        .then((risultato) => {
            display.value = risultato; // Mostra il risultato nel display
        })
        .catch((errore) => {
            display.value = "Errore"; // Mostra un messaggio di errore
        });
});