import {useRef, useState} from 'react';
import React from 'react';
import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css"



const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()


    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountIntoNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountIntoNumber < 1 ||
            enteredAmountIntoNumber > 5 
        ) {
            setAmountIsValid(false)
            return
        }
        props.onAddToChart(enteredAmountIntoNumber)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref = {amountInputRef}
                label="Amount" 
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "10",
                    step: "1",
                    defaultValue: "1",
            }}/>
            <button>add</button> 
            {!amountIsValid && <p>Please enter a valid amount of dood, more than 0 and less than 5</p>}  
        </form>
    )
}

export default MealItemForm
