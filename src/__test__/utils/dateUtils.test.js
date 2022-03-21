// Ricevere una data e restituire il formato corretto
import { formatDate } from '../../utils/dateUtils';

// Definizione del Test Case
describe('Formattazione delle date', () => {
    //  1. Happy path
    //  - inviare una data corretta e verifivare che il formato sia corretto
    it('Formattazione corretta delle date', () => {
        // DIchiaro la data in formato strtinga così come restituita dalle API
        const mydate = '2020-01-01T00:00:00.000Z';

        // Chiamo la funzione formatDate passando la data
        const formattedDate = formatDate(mydate);

        // Verifico che il risltato atteso con il risultsato ottenuto
        expect(formattedDate).toEqual('1 gen 2020, 01:00');
    });

    // 2. Edge cases/Exception
    // - Inviare come data null
    it('Inviare come datta null', () => {
        const mydate = null;
        expect(() => formatDate(mydate)).toThrow(); // Mi aspetto un'eccezzione
    });

    // - Inviare come data Undefinefd
    it('Inviare come data Undefinefd', () => {
        const mydate = undefined;
        expect(() => formatDate(mydate)).toThrow(); // Mi aspetto un'eccezzione
    });

    // - Inviare come stringa non corretta
    it('Inviare una stringa non corretta', () => {
        const mydate = 'questa è una stringa';
        expect(() => formatDate(mydate)).toThrow(); // Mi aspetto un'eccezzione
    });
});