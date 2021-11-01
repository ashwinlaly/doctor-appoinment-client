import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import DatePicker from '../../Component/MobileDatePicker/DatePicker';

import SLOTS from '../../Config/slot';
import { createAppoinment } from '../../Redex/Doctor/doctor-actions';

const AppoinmentForm = ({
        open,
        error, 
        handleClose, 
        createAppoinment,
    }) => { 

    const [slot, setSlot] = useState({
        date: '',
        morning_starttime: '',
        morning_endtime: '',
        evening_starttime: '',
        evening_endtime: ''
    });
    const [date, setDate] = useState('');
    const [morningSlot, setMorningSlot] = useState([]);
    const [eveningSlot, setEveningSlot] = useState([]);

    useEffect(() => {
        if(moment(morningSlot[0], 'h:mma').isBefore(moment(morningSlot[1], 'h:mma'))) {
            setSlot({...slot, morning_starttime: morningSlot[0], morning_endtime: morningSlot[1]});
        } else {
            setSlot({...slot, morning_starttime: morningSlot[1], morning_endtime: morningSlot[0]});
        }
    }, [morningSlot]);

    useEffect(() => {
        if(moment(eveningSlot[0], 'h:mma').isBefore(moment(eveningSlot[1], 'h:mma'))) {
            setSlot({...slot, evening_starttime: eveningSlot[0], evening_endtime: eveningSlot[1]});
        } else {
            setSlot({...slot, evening_starttime: eveningSlot[1], evening_endtime: eveningSlot[0]});
        }
    }, [eveningSlot]);

    const handleMorningSlot = (value) => {
        if(morningSlot.length <= 1) {
            setMorningSlot([...morningSlot, value]);
        } else {
            setMorningSlot([]);
        }
    }

    const handleEveningSlot = (value) => {
        if(eveningSlot.length <= 1) {
            setEveningSlot([...eveningSlot, value]);
        } else {
            setEveningSlot([]);
        }
    }

    const resetModal = () => {
        setDate('');
        setMorningSlot('');
        setEveningSlot('');
        setSlot({
            date: '',
            morning_starttime: '',
            morning_endtime: '',
            evening_starttime: '',
            evening_endtime: ''
        });
    }

    const handleSubmit = () => {
        createAppoinment(slot);
        if(!error?.length && slot.date) {
            resetModal();
            handleClose(false);
        }
    }

    return (
        <Box component="form" noValidate sx={{ mt: 5 }}>
            <Modal open={open} handleClose={handleClose}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <DatePicker value={date} onChange={(value) => {
                            setDate(value);
                            setSlot({...slot, date: moment(date).format("YYYY-MM-DD")});
                        }}/>
                    </Grid>
                    <Grid item xs={12}>
                        Morning 
                        {SLOTS.morning_slot ? 
                            (<Stack direction="row" spacing={1}>
                                { SLOTS.morning_slot.map((slot, index) => 
                                    <Chip 
                                        key={index} 
                                        label={slot}
                                        onClick={() => handleMorningSlot(slot)} 
                                        color= {(morningSlot.includes(slot)) ? "success": "primary"}
                                    />
                                )}
                            </Stack>) : null}
                    </Grid>
                    <Grid item xs={12}>
                        Evening 
                        {SLOTS.evening_slot ?
                            (<Stack direction="row" spacing={1}>
                                { SLOTS.evening_slot.map((slot, index) => 
                                    <Chip 
                                        key={index} 
                                        label={slot}
                                        onClick={() => handleEveningSlot(slot)} 
                                        color= {(eveningSlot.includes(slot)) ? "success": "primary"}
                                    />
                                )}
                            </Stack>) : null}
                    </Grid>
                </Grid>
                <Button label="Create" type="submit" onClick={handleSubmit}/>
                {error?.map((item, index) => <li key={index}>{item.msg}</li>)}
            </Modal>
      </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        error: state.doctorData.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createAppoinment: (data) => dispatch(createAppoinment(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppoinmentForm);