import axios from 'axios';
import { useState, useEffect } from 'react';

function WelcomeMsg(){

    const [username, setUsername] = useState('');

    const 

    useEffect(()=>{

        const token = localStorage.getItem('token')

        const fetchUserData = () =>{
            try {

                axios.get('http://localhost:5000/api/signin', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
        
                })
                .then(response =>{
                    console.log(response.data)
                    setUsername(response.data.user.name)

                    
                })
                
            } catch (error) {
                
            }
        }


        fetchUserData();

       

      

    }, [])



    return (
        <>

        <p ></p>


        </>
    )

}

export default WelcomeMsg;