import React from 'react';
import classes from "./WrapperCard.module.css"

const WrapperCard = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default WrapperCard
