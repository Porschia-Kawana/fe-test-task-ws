import './LeadershipTable.scss'
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(avatar, username, email, score) {
    return { avatar, username, email, score };
}

export default function LeadershipTable(props) {
    const [activeRow, setActiveRow] = useState()
    const [users, setUsers] = useState([])
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        const socket = io('http://localhost:3050');

        function getUserData(user) {
            const newUser = createData(user.avatar, user.username, user.email, Number(user.score))
            setActiveRow(newUser)
            setUsers(users => [...users, newUser])
        }

        socket.on("userData", getUserData)
        return () => {
            socket.disconnect();
        }
    }, [])

    useEffect(() => {
        function compareScores(a, b) {
            if (a.score > b.score) {
                return -1;
            } else if (a.score < b.score) {
                return 1;
            }
            return 0;
        }

        const updatedUsersList = users.sort(compareScores)
        setUsersList(updatedUsersList.slice(0, props.limit))
    }, [users])

    function removeUser(toDelete) {
        setUsers(users => users.filter((user) => user.username !== toDelete.username))
    }

    return (
        <>
            <div className="overlay" />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='LeadershipTable__header'>
                            <TableCell></TableCell>
                            <TableCell><strong>Username</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Score</strong></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersList.map((row) => (
                            <TableRow
                                style={{ backgroundColor: row.username === activeRow.username ? "#ff9800" : "transparent", transition: "background-color 1000ms linear" }}
                                key={row.username}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img className="LeadershipTable__avatar" src={row.avatar}></img>
                                </TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.score}</TableCell>
                                <TableCell>
                                    <IconButton color='primary' onClick={() => removeUser(row)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}