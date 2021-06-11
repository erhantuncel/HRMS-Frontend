export default class SkillService{
    add(skill) {
        return axios.post(`/skills/add`, skill)
    }

    getallByCandidateId(resumeId) {
        return axios.get(`/skills/getall-by-resume-id/${resumeId}`)
    }
}