import axios from "axios";

export default class ResumeService{
    
    add(resume) {
        return axios.post(`/resumes/add`, resume)
    }

    getallByCandidateId(candidateId) {
        return axios.get(`/resumes/getall-by-candidate-id/${candidateId}`)
    }
}