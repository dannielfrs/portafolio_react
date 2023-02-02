import React from 'react'
import styles from './credential.module.scss'
import profile from '../../assets/images/profile.jpg'

const Credential = () => {
    return (
        <div className={styles.credential}>
            <img src={profile} alt="" />
            <div className={styles.credential_title}>
                <h4>daniel frias</h4>
                <h1>Frontend developer </h1>
            </div>
        </div>
    )
}

export default Credential