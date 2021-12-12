import API from './API';

export const getAllDoctorCategory = async () => {
    return await API.get("/doctortypes");
}