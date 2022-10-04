import { useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled} from '@mui/material'
import { getUsers } from '../service/api';
import { useState } from 'react';

const StyledTable = styled(Table)`
    width: 70%;
    margin: 50px auto 0 auto;
`

const TRow = styled(TableRow)`
    background: #000;
    & > th
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
    return (
        <StyledTable>
            <TableHead>
                <TRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    user.map(user => (
                        <TableRow>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;