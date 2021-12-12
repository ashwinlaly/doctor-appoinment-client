import React, { Fragment } from 'react';

import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import {default as MuiTable} from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import AnimationSkeleton from '../../Component/AnimationSkeleton/Skeleton';

const TableHeader = ({columns}) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map((item, index) => <TableCell>{item.label}</TableCell> )}
            </TableRow>
        </TableHead>
    );
};

const TableContent = ({data, columns}) => {
    return (
        <Fragment>
            <TableContainer sx={{ m:3, pr:1 }} component={Paper}>
                <MuiTable sx={{ minWidth: 600, mt:1 }} aria-label="simple table">
                    <TableHeader columns={columns}/>
                    { data?.length ?
                        (<TableBody>
                            {data?.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {columns.map((item, columnIndex) => <TableCell key={columnIndex}>{row[item.key]}</TableCell> )}
                                </TableRow>
                            ))}
                        </TableBody>
                        ) : (
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={columns.length}>
                                    <AnimationSkeleton width={1100}/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                </MuiTable>
            </TableContainer>
        </Fragment>
    );
};

const Table = ({columns, data}) => {
    return (
        <Fragment>
            <TableContent data={data} columns={columns}/>
        </Fragment>
    );
};

export default Table;