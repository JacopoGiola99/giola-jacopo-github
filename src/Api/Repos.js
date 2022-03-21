import axios from "axios";

export const listRepos = async () => {
    try{
        const response = await axios.get(
            "https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos"
        );
        console.log(response);
        return response.data && response.data.results ? response.data.results : undefined;
    }catch(error){
        console.error(error);
        throw error;
    }
}
