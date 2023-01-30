import React from 'react';
import Input from '@mui/material/Input';

const Movies = (inputHandle) => {

    return (
        <>
            <Input type='text' onChange={inputHandle} />
            
        </>
    )
}

export default Movies;