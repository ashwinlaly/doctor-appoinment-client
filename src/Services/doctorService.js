import API from './API';

export const doctorLogin = async (data) => {
    return await API.post(`/doctor/signin`, data);
}

export const getDoctorsAppoinmentByDate = async(date) => {
    return await API.post(`/doctor/appoinments`, {date});
}

export const createAppoinmentByDate = async(data) => {
    return await API.post(`/doctor/slot`, data);
}

export const updateAppoinmentStatus = async(data) => {
    return await API.post(`/doctor/appoinment/status`, data);
}