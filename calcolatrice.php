<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recupera l'espressione
    $espressione = $_POST["espressione"] ?? "";

    // Controlla se l'espressione contiene caratteri non validi
    if (preg_match('/[^0-9+\-×÷.%()]/', $espressione)) {
        echo "Errore";
        exit;
    }

    // Sostituisce i simboli con operatori PHP
    $espressione = str_replace(['×', '÷'], ['*', '/'], $espressione);

    // Controlla se l'espressione contiene divisioni per zero
    if (preg_match('/\/0(?!\d)/', $espressione)) {
        echo "Errore";
        exit;
    }

    // Valuta l'espressione
    try {
        $risultato = eval("return $espressione;");
        echo $risultato;
    } catch (Exception $e) {
        echo "Errore: " . $e->getMessage(); // Mostra il messaggio di errore dettagliato
    }
} else {
    echo "Errore";
}