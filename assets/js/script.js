/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

// Base dati: ogni task ha il testo e la priorità (alta, media, bassa)
const tasks = [
	{ testo: 'Pagare le bollette', priorita: 'alta' },
	{ testo: 'Studiare JavaScript', priorita: 'media' },
	{ testo: 'Comprare il pane', priorita: 'bassa' },
	{ testo: 'Chiamare il dentista', priorita: 'alta' },
	{ testo: 'Riposarsi', priorita: 'bassa' },
	{ testo: 'Aperitivo', priorita: 'alta' },
];

const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

