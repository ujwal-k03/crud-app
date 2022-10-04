
import {Typography, styled} from "@mui/material"

const StylishHeading = styled(Typography)`
    margin-top: 50px;
    font-size: 30px;
    text-align: center;
`
const Home = () => {
    return (
        <StylishHeading>Welcome to my (verybasic) CRUD app!</StylishHeading>
        
    )
}

export default Home;