import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";



const WelcomeMsg = () => {

    const {userInfo} = useSelector((state) => state.auth)

    const username = userInfo?.user?.name

    return (
        <Container>

            

            <h1>Welcome , {username} to Jobhub</h1>


        </Container>
    )

}

export default WelcomeMsg;