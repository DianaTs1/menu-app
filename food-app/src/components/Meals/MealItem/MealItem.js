import React from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <p className={classes.descriptions}>{props.description}</p>
                <h4 className={classes.price}>{price}</h4>
            </div>
            <div>
                <MealItemForm></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem
