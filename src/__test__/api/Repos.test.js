// Effettuare una chiamata ad un Api
import listRepos from '../../api/Repos'


const mockUser = {
    "name": "Davide",
    "surname": "Casiraghi",
    "login": "davidec2k",
    "class": "Fullstack2020/2022",
    "link": "https://api.github.com/repos/davidec2k/casiraghi-davide-github",
    "creationDate": "2021-10-29T08:05:43Z",
    "lastUpdate": "2021-11-22T09:52:47Z",
    "repoName": "casiraghi-davide-github",
    "idRepo": 422491777
  }

// Descrizione del Test Case
describe('Chiamata alla Api', () => {

    beforeAll(() => {
        jest.setTimeout(10000);
    });

    // 1. Happy path

    // - Effettuare un controllo sulla connnessione
    it('Effettuare un controllo sulla connnessione', async () => {
        // chiamo la funzione listRepos
        const response = await listRepos();

        // verrifico che onError sia uguale a 'Network Error'
        expect(response).toEqual('Network Error');
    });

    // - Inviare una richiesta corretta
    it('Inviare una richiesta corretta', async () => {
        // chiamo la funzione listRepos
        const response = await listRepos();

        //controllo lo status della respose
        expect(response).toContain(mockUser);

    });

    // 2. Edge cases/Exception

    // - Inviare una request che dia un errore 404
    it('Inviare una request che dia un errore 404', () => {
        
    });

    // - Inviare una request che dia un errore 500
    it('Inviare una request che dia un errore 500', () => {
        
    });

});