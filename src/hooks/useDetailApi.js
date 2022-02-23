import { listDetails } from "../api/detailApi";
import { useEffect, useState } from "react";

export const useDetailApi = (login, repoName) => {

    const [details, setDetails] = useState([]);
    const [onError, setOnError] = useState(false);

    useEffect(() => {
        const populateDetails = async () => {
            try {
                const tempDetail = await listDetails(login, repoName);
                setDetails(tempDetail);
                setOnError(false);
            } catch (err) {
                setOnError(true);
            }
        }

        populateDetails();
    }, [login, repoName])

    return { details, setDetails, onError };
}