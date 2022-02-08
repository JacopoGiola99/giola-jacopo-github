import { listRepos } from "../api/Repos";
import { useEffect, useState } from "react";

export const UseRepos = () => {

    const [repos, setRepos] = useState([]);
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populateRepos = async () => {
            try {
                const tempRepo = await listRepos();
                setRepos(tempRepo);
            } catch (err) {
                setOnError(true);
            }
        }

        populateRepos();
    }, [])

    return { repos, setRepos, onError };
}