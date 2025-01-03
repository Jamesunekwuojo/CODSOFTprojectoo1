import { useState } from "react";
import {Container, Row, Col , Card, Alert } from 'react-bootstrap';

import { useSearchJobQuery } from "../../slices/jobsApiSlice";

import Searchdiv from "../Searchdiv/Searchdiv";

const JobSearchList = () => {

    const [searchParams, setSearchParams] = useState({});

    const {data: jobs, isLoading, isError, error} = useSearchJobQuery(searchParams, {
        skip:!searchParams.JobCategory && !searchParams.JobType && !searchParams.KeyWords, // to skip initial fetch
    })

    if (isLoading){
        return <div>Loading...</div>
    }

    if (isError){
        return <Alert.danger>Error: {error.data?.message || "Something went wrong"}</Alert.danger>
    }


    return ( 
        <div>
            <Searchdiv/>

            

        </div>

    );
}
 
export default JobSearchList;