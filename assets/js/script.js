// STATO: tutto quello che si vede a schermo dipende da queste variabili
let tasks = [];
let filtro = 'tutti';

const form = document.querySelector('.aggiunta');
const input = document.querySelector('#nuovo-task');
const selectPriorita = document.querySelector('#priorita');
const filtri = document.querySelector('.filtri');
const lista = document.querySelector('#lista-task');
const etichetta = document.querySelector('#etichetta');
const contatore = document.querySelector('#contatore');

// RENDER: ridisegna lista, filtri e contatore partendo dallo stato
function render() {
    lista.innerHTML = '';

    let visibili = tasks;
    if (filtro === 'attivi') {
        visibili = tasks.filter((t) => !t.completato);
    } else if (filtro === 'completati') {
        visibili = tasks.filter((t) => t.completato);
    }

    visibili.forEach((t) => {
        const li = document.createElement('li');
        li.classList.add(`priorita-${t.priorita}`);
        if (t.completato) {
            li.classList.add('completato');
        }
        li.innerHTML = `
            <input type="checkbox" data-id="${t.id}" ${t.completato ? 'checked' : ''}>
            <span class="testo"></span>
            <span class="badge">${t.priorita}</span>
            <button class="elimina" data-id="${t.id}">Elimina</button>`;
        li.querySelector('.testo').textContent = t.testo;
        lista.appendChild(li);
    });

    document.querySelectorAll('.filtro').forEach((b) => {
        b.classList.toggle('attivo', b.dataset.filtro === filtro);
    });

    if (filtro === 'completati') {
        etichetta.textContent = 'Completati';
        contatore.textContent = tasks.filter((t) => t.completato).length;
    } else {
        etichetta.textContent = 'Attivi';
        contatore.textContent = tasks.filter((t) => !t.completato).length;
    }
}

// Aggiungi task: submit del form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const testo = input.value.trim();
    if (testo === '') {
        return;
    }
    tasks.push({ id: Date.now(), testo, priorita: selectPriorita.value, completato: false });
    form.reset();
    render();
});

// Event delegation sulla lista: checkbox ed Elimina
lista.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const task = tasks.find((t) => t.id === Number(e.target.dataset.id));
        task.completato = e.target.checked;
        render();
    }
});

lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('elimina')) {
        tasks = tasks.filter((t) => t.id !== Number(e.target.dataset.id));
        render();
    }
});

// Filtri: un solo listener sul contenitore
filtri.addEventListener('click', (e) => {
    if (e.target.classList.contains('filtro')) {
        filtro = e.target.dataset.filtro;
        render();
    }
});

render();