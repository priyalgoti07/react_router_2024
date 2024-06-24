import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
    return (
        <div className='flex p-3 justify-center bg-orange-500'>User: {userid}</div>
    )
}

export default User