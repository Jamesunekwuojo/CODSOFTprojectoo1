import {useState} from 'react'
import {useAuthContext} from './useAuthContext.jsx'

export const useSignin = () => {
    const [isLoading, setIsLoading] = useState('');

    const {dispatch} = useAuthContext();
}