import React from 'react'
import { Link } from 'react-router-dom'

import Gas from './gas'
import Electric from './electric'
import Water from './water'
import Internet from './internet'

const Bills = () => {
    return (
        <div>
            <h2>Bills</h2>
            <Link to={`/bills/gas`}>Gas</Link>
            <Link to={`/bills/electric`}>Electric</Link>
            <Link to={`/bills/water`}>Water</Link>
            <Link to={`/bills/internet`}>Internet</Link>
            <Gas />
            <Electric />
            <Water />
            <Internet />
        </div>
    )
}

export default Bills;
