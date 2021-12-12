import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AddAlarm from '@mui/icons-material/AddAlarm';

import AppoinmentForm from './AppoinmentForm';
import AppoinmentsListing from './AppoinmentsListing';
import DatePicker from '../../Component/MobileDatePicker/DatePicker';
import {getAppoinmentByDate} from '../../Redex/Doctor/doctor-actions';

const Appoinment = ({appoinments, getAppoinmentData}) => {

    const [date, setDate] = useState(new Date(moment()));
    const [openAddSlotModal, setopenAddSlotModal] = useState(false);

    const handleCreateSlot = () => {
        setopenAddSlotModal(true);
    };

    useEffect(() => {
        getAppoinmentData(moment(date).format("YYYY-MM-DD"));
    }, [date]);

    return (
        <Container maxWidth="xlg" sx={{ mt: 4, mb: 2 }}>
            <Grid container spacing={12}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500}}>
                        <Grid container spacing={1}>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <DatePicker label={`Slot Date`} value={date} onChange={(value) => setDate(value)} />
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" endIcon={<AddAlarm/>} onClick={handleCreateSlot}>Add Slot</Button>
                            </Grid>
                        </Grid>
                        <AppoinmentsListing appoinments={appoinments}/>
                    </Paper>
                </Grid>
            </Grid>
            <AppoinmentForm open={openAddSlotModal} handleClose={() => setopenAddSlotModal(false)}/>
      </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        appoinments: state.doctorData.appoinments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAppoinmentData: (data) => dispatch(getAppoinmentByDate(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Appoinment);