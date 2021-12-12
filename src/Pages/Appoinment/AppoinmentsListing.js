import React, {Fragment, useState} from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import CommentIcon from '@mui/icons-material/Comment';
import TableContainer from '@mui/material/TableContainer';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Modal from '../../Component/Modal/Modal';
import {default as CustomButton} from '../../Component/Button/Button';
import AnimationSkeleton from '../../Component/AnimationSkeleton/Skeleton';
import { updateAppoinmentByID } from '../../Redex/Doctor/doctor-actions';

const TableHeader = () => {
  return (
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
    </TableHead>
  );
}

const AppoinmentNotes = ({open, handleClose, appoinmentID, updateAppointment}) => {
  const [active, setActive] = useState(true);
  const [prescription, setPrescription] = useState('');

  const handleSubmit = () => {
    let data = {
      appointment_id: appoinmentID, 
      is_active: active, 
      prescription
    };
    updateAppointment(data);
  }

  return (
    <Box component="form" noValidate sx={{ mt: 5 }}>
      <Modal open={open} handleClose={handleClose}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            Add prescription notes: 
            <TextField
              rows={5}
              fullWidth
              multiline
              label="Multiline"
              value={prescription}
              id="outlined-multiline-static"
              onChange={(e) => setPrescription(e.target.value)}
              />
          </Grid>
          <Grid item xs={12}>
            Mark completed: 
            <Checkbox 
              value={active}
              checked={active}
              onClick={() => setActive(!active)} 
              label={{ inputProps: { 'aria-label': 'Checkbox demo' } }} 
            />
          </Grid>
        </Grid>
        <CustomButton color="primary" label="Completed" type="submit" onClick={handleSubmit}/>
      </Modal>
    </Box>
  );
};

function AppoinmentsListing({appoinments, updateAppointment}) {
  const [appoinmentID, setAppoinmentID] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleAppoinmentComments = (_id) => {
    setAppoinmentID(_id);
    setShowCommentModal(true);
  }
  
  return (
    <Fragment>
      <TableContainer sx={{ mt:1 }} component={Paper}>
        <Table sx={{ minWidth: 600, mt:0 }} aria-label="simple table">
          <TableHeader />
          { appoinments?.data?.length ?
              (<TableBody>
              {appoinments?.data?.map((row) => (
                  <TableRow
                      key={row.user_id?._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell>
                      {row.is_active ? <FiberManualRecordIcon sx={{ color: pink[500] }}/> : <FiberManualRecordIcon color="primary"/>}
                    </TableCell>
                    <TableCell>
                      {moment.unix(row.starttime).format("H:mm")} - 
                      {moment.unix(row.endtime).format("H:mm")}
                    </TableCell>
                    <TableCell>{row.user_id?.name}</TableCell>
                    <TableCell>{row.user_id?.email}</TableCell>
                    <TableCell>{row.user_id?.phone}</TableCell>
                    <TableCell>
                      <Button variant="contained" endIcon={<CommentIcon/>} onClick={() => handleAppoinmentComments(row._id)}></Button>
                    </TableCell>
                  </TableRow>
              ))}
              </TableBody>
          ) : (
            <Fragment>
              <TableBody>
                <TableRow>
                  <TableCell colSpan="5">
                    <AnimationSkeleton width={1100}/>
                    <AnimationSkeleton width={1100}/>
                    <AnimationSkeleton width={1100}/>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Fragment>
          )}
        </Table>
      </TableContainer>
      <AppoinmentNotes 
        open={showCommentModal} 
        appoinmentID={appoinmentID} 
        updateAppointment={updateAppointment}
        handleClose={() => setShowCommentModal(false)}
      />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAppointment: (data) => dispatch(updateAppoinmentByID(data))
  };
};

export default connect(null, mapDispatchToProps)(AppoinmentsListing);