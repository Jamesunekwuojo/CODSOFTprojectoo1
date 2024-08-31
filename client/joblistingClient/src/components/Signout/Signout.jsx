import {useNavigate} from 'react';


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