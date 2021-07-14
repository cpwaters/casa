import React from 'react'
import Food from './food'
import Household from './household'

const Shopping = () => {
    return (
        <div>
            <h2>Shopping</h2>
            <Food />
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