# Calcolatrice PHP

Un progetto di calcolatrice elettronica ispirata al design della calcolatrice Apple, implementata con **HTML5**, **CSS3**, **JavaScript** per la gestione degli input, e **PHP** lato server per l'elaborazione delle operazioni matematiche.

---

## Funzionalità

- **Design moderno**: Interfaccia semplice e pulita, simile alla calcolatrice di Apple.
- **Supporto delle operazioni di base**:
  - Aggiunta (+)
  - Sottrazione (-)
  - Moltiplicazione (×)
  - Divisione (÷)
  - Percentuali (%)
- **Gestione degli errori**:
  - Messaggio di errore per input non validi (es. `3++5`).
- **Risultati in tempo reale**:
  - Utilizzo di **AJAX** per inviare l'espressione al server e ricevere il risultato senza ricaricare la pagina.

---

## Requisiti

### Lato server
- PHP 7.4 o superiore
- Un server web (es. Apache, Nginx, XAMPP)

### Lato client
- Browser moderno compatibile con HTML5, CSS3 e JavaScript

---

## Struttura del Progetto

- index.html: File principale che contiene il layout della calcolatrice.
- style.css: Stile personalizzato per l’interfaccia utente.
- script.js: Gestione degli eventi e comunicazione con il server.
- calcolatrice.php: Logica lato server per elaborare le espressioni matematiche.

---

## Tecnologie Utilizzate

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP
- **Comunicazione Client-Server**: Fetch API (AJAX)

---

## Autore

Progetto sviluppato da [Mauro Montane](https://github.com/mauromltn).

Se hai domande o suggerimenti, sentiti libero di aprire un’**issue** o fare una **pull request**.
