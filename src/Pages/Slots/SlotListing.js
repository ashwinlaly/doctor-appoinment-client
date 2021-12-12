import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import Table from "../../Component/Table/Table";
import { getDoctorSlot } from '../../Redex/Doctor/doctor-actions';

const SlotListing = ({slots, doctorSlots}) => {
    useEffect(() => {
        doctorSlots();
    }, []);
    
    let columns = [
        {
            key: "date",
            label: "Date"
        },
        {
            key: "morning_starttime",
            label: "Morning start time"
        },
        {
            key: "morning_endtime",
            label: "Morning end time"
        },
        {
            key: "evening_starttime",
            label: "Evening start time"
        },
        {
            key: "evening_endtime",
            label: "Evening end time"
        },
        {
            key: "action",
            label: "Action"
        }
    ];
    return (
        <Fragment>
            <Table columns={columns} data={slots}/>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        slots: state.doctorData.slots
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doctorSlots: () => dispatch(getDoctorSlot())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlotListing);