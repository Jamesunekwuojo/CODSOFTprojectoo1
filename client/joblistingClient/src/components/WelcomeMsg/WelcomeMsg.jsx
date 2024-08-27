import axios from 'axios';
import { useState, useEffect } from 'react';

function WelcomeMsg(){

    const [name, setName] = useState('');

    useEffect(()=>{

        const token = localStorage.getItem('token')

        axios.get('http://localhost:5000/api/signup', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }

        })
        .then(response =>{
            console.log(response.data)
            setName(response.data.user.name)
        })

    }, [])



    return (
        <>


        </>
    )

}

export default WelcomeMsg;