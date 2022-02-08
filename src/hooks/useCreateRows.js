import { useState, useEffect } from "react";

export const useCreateRows = (repos, commit) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([]);
        repos.map((repo, id) => {
            let temp = createData(repo.surname, repo.name, repo.login, repo.repoName, commit, repo.creationDate, repo.lastUpdate, id, repo.idRepo);
            setRows(rows => [...rows, temp]);
            return null;
        })
    }, [commit, repos])

    return rows;

}

const createData = (cognome, nome, utenteGithub, nomeRepo, totaleCommit, dataCreazione, ultimoAggiornamento, id, idRepo) => {
    return {
        cognome,
        nome,
        utenteGithub,
        nomeRepo,
        totaleCommit,
        dataCreazione,
        ultimoAggiornamento,
        id,
        idRepo,
        dettagli: [
            {
                cognome,
                nome,
                utenteGithub,
                nomeRepo,
                totaleCommit,
                dataCreazione,
                ultimoAggiornamento,
            },
        ],
    };
}