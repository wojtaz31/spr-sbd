import { przerobione } from "./Tescik"
import { questions } from "./pytania_inf03_sql"

let pytania: any = []

export function getProgressFromStorage() {
    let poprawne = 0
    let udzielone = 0
    let storedData: any = []
    if (localStorage.getItem('iloscPoprawnych') && localStorage.getItem('iloscUdzielonych')) {
        poprawne = JSON.parse(localStorage.getItem('iloscPoprawnych') ?? '') ?? 0
        udzielone = JSON.parse(localStorage.getItem('iloscUdzielonych') ?? '') ?? 0


        if (localStorage.getItem('przerobione')) {
            storedData = JSON.parse(localStorage.getItem('przerobione') ?? '');
            console.log(storedData)
        }
    }
    return {
        'iloscPoprawnych': poprawne,
        'iloscUdzielonych': udzielone,
        'przerobione': storedData
    }
}

export function loadRandomQuestion() {
    let randomIndex = 0;
    if (przerobione.length > 0) {
        pytania = questions.filter((pytanie) => {
            return !przerobione.includes(+pytanie.q.id - 1)
        })
        if (!pytania) { return 0 }
        console.log(pytania)
        localStorage.setItem('przerobione', JSON.stringify(przerobione));

        randomIndex = Math.floor(Math.random() * pytania.length);
    }
    else {
        randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex]
    }
    return pytania[randomIndex];
};