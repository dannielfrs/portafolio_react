import React from 'react'
import styles from "./cardSlided.module.scss";

const CardSlided = (props) => {

    const handleClick = () => {
        window.open(props.url)
    }

    return (
        <div className={styles.cardSlided} onClick={handleClick}>
            <img src={props.img} alt="" />
            <div className={styles.cardSlided_content}>
                <h3>{props.title}</h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default CardSlided