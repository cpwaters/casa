import React from 'react'
import Gas from './gas'
import Electric from './electric'
import Water from './water'
import Internet from './internet'

const Bills = () => {
    return (
        <div>
            <h2>Bills</h2>
            <Gas />
            <Electric />
            <Water />
            <Internet />
        </div>
    )
}

export default Bills;
