import moment from 'moment';
const MORNIG_START_TIME = "07:00";
const MORNIG_END_TIME = "12:00";
const EVENING_START_TIME = "17:00";
const EVENING_END_TIME = "22:00";

const generate_slot = (start = MORNIG_START_TIME, end = MORNIG_END_TIME) => {
    let SLOTS = [];
    let time = start;
    SLOTS = [...SLOTS, time];
    while(time !== end) {
        time = moment(time, "H:mm").add(30, 'minute').format("H:mm");
        SLOTS = [...SLOTS, time];
        start = time;
    }
    return SLOTS;
}

export default {
    morning_slot: generate_slot(MORNIG_START_TIME, MORNIG_END_TIME),
    evening_slot: generate_slot(EVENING_START_TIME, EVENING_END_TIME),
};