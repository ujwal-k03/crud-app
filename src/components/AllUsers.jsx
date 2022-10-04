import { useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 70%;
    margin: 50px auto 0 auto;
`

const TRow = styled(TableRow)`
    background: #000;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;
    }
`

const AllUser = () => {

    const [user, setUsers] = useState([])

    useEffect(() => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUsers();
        // console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getUsersDetails();
    }
    return (
        <StyledTable>
            <TableHead>
                <TRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    user.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{marginRight : 10}} color='secondary' component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant='contained' onClick={() => {deleteUserData(user.id)}}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;