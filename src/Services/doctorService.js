import API from './API';

export const doctorLogin = async (data) => {
    return await API.post(`/doctor/signin`, data);
}

export const doctorSignup = async (data) => {
    return await API.post(`/doctor/signup`, data);
}

export const getDoctorsSlot = async () => {
    return await API.get(`/doctor/slots`);
}

export const createAppoinmentByDate = async(data) => {
    return await API.post(`/doctor/slot`, data);
}

export const updateAppoinmentStatus = async(data) => {
    return await API.post(`/doctor/appoinment/status`, data);
}

export const getDoctorsAppoinmentByDate = async(date) => {
    return await API.post(`/doctor/appoinments`, {date});
}
