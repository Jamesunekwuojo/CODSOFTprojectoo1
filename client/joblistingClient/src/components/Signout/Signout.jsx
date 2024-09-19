import {useNavigate} from 'react-router-dom';



function Signout() {
    const navigate = useNavigate();



    const handleLogout =()=>{
        localStorage.removeItem('token');
        navigate('/signin')
        
       
    }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
           

        </div>
    )
}
export default Signout;