import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
} from "../../slices/usersApiSlice";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email input; Step 2: OTP and password reset
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
  });

  const [forgotPassword, {isLoading: isLoadingforgotPassword}] = useForgotPasswordMutation();
  const [resetPassword, {isLoading:isLoadingresetPassword}] = useResetPasswordMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email }).unwrap();

      Swal.fire({
        title: "OTP Sent Successfully",
        text: response?.message || "Please check your email for the OTP.",
        icon: "success",
      });

      setStep(2); // Move to Step 2 for OTP and password reset
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.data?.error || error?.message || "Failed to send OTP.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword({ email, ...formData }).unwrap();

      Swal.fire({
        title: "Password Reset Successfully",
        text: response?.message || "You can now log in with your new password.",
        icon: "success",
      });

      setFormData("")

    
    } catch (error) {
      Swal.fire({
        title: "Error",
        text:
          error?.data?.error || error?.message || "Failed to reset password.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Container>
      {step === 1 ? (
        <Form onSubmit={handleSendOtp}>
          <Form.Group controlId="formEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Button type="submit" className="mt-3" disabled={isLoadingforgotPassword}>
            {isLoadingforgotPassword ? "Sending OTP" : "Send OTP"}
            
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleResetPassword}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="formOtp" className="mt-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              placeholder="Enter the OTP"
            />
          </Form.Group>

          <Form.Group controlId="formNewPassword" className="mt-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              placeholder="Enter your new password"
            />
          </Form.Group>
          <Button type="submit" className="mt-3" disabled={isLoadingresetPassword}>
            {isLoadingresetPassword ? "Resetting Password" : "Reset Password"}
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;