// Recupera il display
const display = document.getElementById("display");

// Aggiunge il simbolo o numero al display
function aggiungiSimbolo(simbolo) {
    const ultimoCarattere = display.value.slice(-1);
    const operatori = ['+', '-', '×', '÷'];

    if (operatori.includes(ultimoCarattere) && operatori.includes(simbolo)) {
        // Evita di aggiungere operatori ripetuti
        return;
    }

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

// Funzione per cancellare l'ultima cifra
function cancellaUltima() {
    const display = document.getElementById("display");
    if (display.value.length > 1) {
        // Rimuove l'ultimo carattere
        display.value = display.value.slice(0, -1);
    } else {
        // Se è l'unico carattere, resetta a "0"
        display.value = "0";
    }
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
            document.getElementById("errore").textContent = "Errore: " + errore.message; // Mostra il messaggio di errore dettagliato
        });
});