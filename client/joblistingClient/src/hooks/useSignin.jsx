import {useState} from 'react'
import {useAuthContext} from './useAuthContext.jsx';
import Axios from 'axios';
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';


export const useSignin = () => {
    const [isLoading, setIsLoading] = useState('');
    const {dispatch} = useAuthContext();
    const {signin} = useAuthContext();
    const navigate = useNavigate();

    const signinUser = (formData) =>{
        setIsLoading(true);


        Axios.post("http://localhost:5000/api/signin", formData)
        .then(response => {
            console.log(response);

            // Store the token in localStorage
            localStorage.setItem('token', response.data.token);
            signin(response.data.token);

            const role = response.data.user.role.toLowerCase(); // collect and covert role to lowercase

            if(role === "employer") {
                navigate("/employer-dashboard");

            } else if (role === "candidate") {
                navigate("/candidate-dashboard");
            } else {
                console.error("Invalid role received:", response.data.role);

            }

            Swal.fire({
                title: "Successfully signed in",
                text: response.data.message,
                icon:'success',
                timer: 2000,
                confirmButtonText: 'OK'
            });




        }

        )
        .catch(error => {
            if(error.response) {
                Swal.fire({
                    title: "Error signing in",
                    text:error.response.data.errror,
                    icon:'error',
                    confirmButtonText:'OK'
                });

            } else {
                Swal.fire({
                    title:'Error!',
                    text: 'Failed to connect to server...Please try again',
                    icon:'error',
                    confirmButtonText: 'OK'
                });

            }

        })  
        
    }
}