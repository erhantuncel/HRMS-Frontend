import axios from "axios"

export default class SkillService{
    add(skill) {
        return axios.post(`/skills/add`, skill)
    }

    getall() {
        return axios.get(`/skills/getall`)
    }
}