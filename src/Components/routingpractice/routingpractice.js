import React, { useEffect } from "react";
import axios from 'axios';

function RoutingPractice() {
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(res => console.log(res.data))
        // .catch(error => console.log(error));
    }, [])
    // const getCustomersData = () => {
    //     axios
    //     .get("https://dummyjson.com/todos")
    //     .then(data => console.log(data.data))
    //     .catch(error => console.log(error));
    //     };
    //     getCustomersData();    
    console.log('data')
    return (
        <div>
            <h1>I'm Working</h1>;
        </div>
    );
}

export default RoutingPractice;