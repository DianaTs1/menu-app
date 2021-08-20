import React from 'react';
import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css"

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: "mount",
                type: "number",
                min: "1",
                max: "10",
                step: "1",
                defaultValue: "1"
            }}/>
            <button>add</button>   
        </form>
    )
}

export default MealItemForm
