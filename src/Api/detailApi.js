import axios from "axios";

export const listDetails = async (login, repoName) => {
    let url = "https://github-funtion-ttf.azurewebsites.net/api/repodetailgithub?owner=" + login + "&repo=" + repoName;
    if (login !== '' && repoName !== '') {
        try {
            const response = await axios.get(url);
            return response.data && response.data.commits ? response.data.commits : undefined;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}