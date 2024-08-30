import {useNavigate} from 'react';


function Logout() {
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
export default Logout;