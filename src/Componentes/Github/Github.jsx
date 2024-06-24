import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/priyalgoti07')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log("Fetched Data:", data); // Debugging log
    //             setData(data);
    //         })
    //         .catch(error => setError(error.toString()));
    // }, []);


    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data?.avatar_url} alt='Profile' />
            <p>login:{data?.login}</p>
        </div>
    );
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/priyalgoti07')
    return response.json()
}