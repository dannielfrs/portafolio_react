import React from 'react'
import styles from './cardBasic.module.scss'

const CardBasic = (props) => {
    return (
        <div className={styles.cardBasic}>
            <img src={props.img} alt="" />
            <h4>{props.skill}</h4>
        </div>
    )
}

export default CardBasic