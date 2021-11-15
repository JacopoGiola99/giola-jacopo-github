import dataGit from "./Mock/apiGit.json";
import students from "./Mock/apiUser.json"

const merge = () => {

    const studentRes = students.students;
    const gitData = dataGit.dataGit;
    const result = [];

    studentRes.forEach(student => {
        student.repos.forEach(repo => {
            gitData.filter(dataGit => dataGit.url === repo).forEach(filtered =>{
                const res = {
                    surname: student.surname,
                    name: student.name,
                    github_user: student.login,
                    repo_name: filtered.name,
                    creation_date: filtered.created_at,
                    last_update: filtered.updated_at,
                };
                result.push(res);
            })
            
        })

    })
    return result;}

export const listRepos = () => {
    const DataObj = []
    merge().forEach(element => DataObj.push(element))
    return DataObj;
}

//export default listRepos;