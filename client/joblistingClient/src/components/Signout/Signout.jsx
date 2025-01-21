import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice.js";
import { logout } from "../../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { Button } from "react-bootstrap";

function Signout({ collapsed }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signout] = useLogoutMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await signout().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(console.error);
    }
  };
  return (
    <div>
      <Button onClick={handleLogout}>
        <FiLogOut /> {!collapsed && "logout"}
      </Button>
    </div>
  );
}
export default Signout;
