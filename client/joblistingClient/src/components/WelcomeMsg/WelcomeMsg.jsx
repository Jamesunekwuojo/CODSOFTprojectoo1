import axios from 'axios';
import { useState, useEffect } from 'react';

function WelcomeMsg(){

    const [username, setUsername] = useState('');

    const [greeting, setGreeting] = useState('');

    const [pregreeting, setPregreeting] = useState('Welcome to JoBHUB');




    useEffect(()=>{

        const token = localStorage.getItem('token')

        const fetchUserData = () =>{
            try {

                axios.get('http://localhost:5000/api/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
        
                })
                .then(response =>{
                    console.log(response.data)
                    setUsername(response.data.name)

                    if(response.data.name){
                        const  preMsg = `Welcome to JOBHUB, ${response.data.name}`

                        setPregreeting(preMsg)
                    }

                    // const preMsg = 'Wecome to JOBHUB!';

                    // setPregreeting(preMsg);

                    const currentTime = new Date().getHours();

                    let timeGreetings;

                    if (currentTime < 12){

                        timeGreetings = 'Good morining'

                    } else if(currentTime < 18) {
                        timeGreetings ='Good afternoon'
                    } else {
                        timeGreetings = 'Good evening'
                    }

                    setGreeting(timeGreetings)

                    
                })
                
            } catch (error) {
                console.log(error)
            }
        }


        fetchUserData();



       

      

    }, [])



    return (
        <>

        <div className='d-flex justify-content-center'>
            <p> {pregreeting} </p>
            <p>{greeting}, {username}</p>
        

        </div>

        


        </>
    )

}

export default WelcomeMsg;