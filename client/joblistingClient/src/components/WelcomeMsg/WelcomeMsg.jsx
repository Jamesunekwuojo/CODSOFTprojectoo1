import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";



const WelcomeMsg = () => {

    const {userInfo} = useSelector((state) => state.auth)

    const username = userInfo?.user?.name

    return (
        <Container>
            <Row>
            <h1 className="text-center">Welcome , {username} to Jobhub</h1>

            </Row>

        </Container>
    )

}

export default WelcomeMsg;