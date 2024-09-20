import {useNavigate} from 'react-router-dom';
import {useLogoutMutation} from '../../slices/usersApiSlice.js'
import {logout } from "../../slices/authSlice.js"
import { useDispatch, useSelector } from 'react-redux';



function Signout() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [signout] = useLogoutMutation();
    const {userInfo} = useSelector((state) => state.auth);



    const handleLogout = async()=>{

        try {

            await signout().unwrap()
            dispatch(logout())
            navigate("/");

        } catch(error) {
            console.log(console.error);
            

        }
       
        
       
    }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
           

        </div>
    )
}
export default Signout;