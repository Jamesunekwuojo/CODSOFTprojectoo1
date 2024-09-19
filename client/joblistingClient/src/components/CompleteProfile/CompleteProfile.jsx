import { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useAuthContext } from "../../hooks/useAuthContext";

function CompleteProfile() {
  const [formData, setFormData] = useState({
    profilePics: "",
    cityName: "",
  });

  const [isAlertHandled, setIsAlertHandled] = useState(false); // To track if alert is shown

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const navigate = useNavigate();
 

  useEffect(() => {
    // if (!user && !isAlertHandled) {
    //   Swal.fire({
    //     title: "Warning",
    //     text: "You skipped a process, Sign in to continue",
    //     icon: "warning",
    //     confirmButtonText: "OK",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       setIsAlertHandled(true); // Set the alert as handled
    //       navigate("/signin", { replace: true }); // Redirect after alert confirmation
    //     }
    //   });
    // }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <h1>Complete Profile</h1>
          </div>
          <Form
            className="border rounded-5 p-4 border-secondary-subtle formContainer"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mt-4">
              <Form.Label>Upload your profile picture</Form.Label>
              <Form.Control
                type="file"
                name="profilePics"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter city name</Form.Label>
              <Form.Control
                type="text"
                name="cityName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center mt-4">
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CompleteProfile;
