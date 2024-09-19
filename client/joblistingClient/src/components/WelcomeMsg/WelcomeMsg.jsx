
import { useState, useEffect } from 'react';


function WelcomeMsg(){

    const [username, setUsername] = useState('');

    const [greeting, setGreeting] = useState('');

    const [pregreeting, setPregreeting] = useState(''); 




    useEffect(()=>{




       

      

    }, [])



    return (
        <>

        <div className='d-flex  flex-column align-items-center'>
            {pregreeting && <p style={{margin:'0'}}>  {pregreeting}</p>}
            {username && <p>{greeting}, {username}</p>}
        

        </div>

        


        </>
    )

}

export default WelcomeMsg;