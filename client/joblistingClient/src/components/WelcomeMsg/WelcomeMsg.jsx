import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";



const WelcomeMsg = () => {

    const {userInfo} = useSelector((state) => state.auth)

    const email = userInfo?.user?.email

    let parts = email.split('@');

    const username = parts[0]

    return (
        <Container>
            <Row>
            <h1 className="text-center">Welcome , {username} to Jobhub</h1>

            </Row>

        </Container>
    )

}

export default WelcomeMsg;