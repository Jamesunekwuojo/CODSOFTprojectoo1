import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import Swal   from "sweetalert2";
import {json, useNavigate} from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";

export const useSignup = () => {
    const  [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const signinUser = async (FormData) => {
        setIsLoading(true);

        try {
            const response = await Axios.post("http://localhost:5000/api/signup", FormData);

            localStorage.setItem('token', response.data.token);

            // Update auth context 
            dispatch({type: "SIGNUP", pyload:response.data});

            //navigate based on user's role
            const role = response.data.role.toLowerCase(); // convert role to lowercase

            if (role === "employer"){
                navigate("/employer/dashboard");
            } else if (role === "candidate") {
                navigate("candidate-dashboard")
            } else {
                console.error("Invalid role received")
            }



        } catch (error){

        }
    }



}