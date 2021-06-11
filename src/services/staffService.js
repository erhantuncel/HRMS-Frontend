import axios from "axios";

export default class StaffService{
    add(staff) {
        return axios.post(`/staffs/add`, staff)
    }
}