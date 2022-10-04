

import { useState } from "react";
import {FormGroup, styled, FormControl, InputLabel, Input, Typography, Button} from "@mui/material"
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const AddUser = () => {

    const [user, setUser] = useState()

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        // console.log(user)
    }

    const addUserDetails = async () => {
        addUser(user);
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;