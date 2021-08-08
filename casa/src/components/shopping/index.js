import React from 'react'
import { Link } from 'react-router-dom'
import Food from './food'
import Household from './household'

const Shopping = () => {
    return (
        <div>
            <h2>Shopping</h2>
            <Link to="/shopping/food">Food</Link>
            <Household />
            <form className="enter-form">
                <label>Enter a product </label>
                <input type="text" />
                <button>Save</button>
            </form>
        </div>
    )
}

export default Shopping;