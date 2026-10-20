/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

// Base dati: ogni task ha il testo e la priorità (alta, media, bassa)
const tasks = [
	{ testo: 'Pagare le bollette', priorita: 'alta' },
	{ testo: 'Studiare JavaScript', priorita: 'alta' },
	{ testo: 'Comprare il Divano', priorita: 'bassa' },
	{ testo: 'Chiamare la mia Ex', priorita: 'alta' },
	{ testo: 'Riposarsi', priorita: 'alta' },
	{ testo: 'Aperitivo', priorita: 'bassa' },
    { testo: 'Lavoro', priorita: 'alta' },
	{ testo: 'Cucina', priorita: 'alta' },
];

const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

/* 1 + 2 + 7 — aggiungiTask con priorità, bottone Elimina e data automatica */
function aggiungiTask(testo, priorita) {
	const li = document.createElement('li');
	li.classList.add(`priorita-${priorita}`);
	li.innerHTML = `${testo} <span class="badge">${priorita}</span>
		<div class="divData">
			<span class="data">${new Date().toLocaleString('it-IT')}</span>
			<button>Elimina</button>
		</div>`;
	lista.appendChild(li);
	contatore.textContent = lista.querySelectorAll('li').length;
}

/* 6 — evidenzia / togliEvidenza */
function evidenzia(indice) {
	lista.children[indice].classList.add('evidenziato');
}

function togliEvidenza(indice) {
	lista.children[indice].classList.remove('evidenziato');
}

/* 8 — contaPerPriorita */
function contaPerPriorita() {
	return {
		alta: lista.querySelectorAll('.priorita-alta').length,
		media: lista.querySelectorAll('.priorita-media').length,
		bassa: lista.querySelectorAll('.priorita-bassa').length,
	};
}

// Avvio: riempie la lista dalla base dati ed evidenzia il secondo task
tasks.forEach(({ testo, priorita }) => aggiungiTask(testo, priorita));
evidenzia(1);
console.log(contaPerPriorita());