import  {useState} from 'react';

function Logout() {

    const handleLogout =()=>{
        localStorage.removeItem('token');
        window.location.href('/signin');
    }
    return(
        <div>
            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}
export default Logout;