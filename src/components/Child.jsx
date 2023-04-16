import React from 'react';
import GrondChild from './Counter'
import User from './User'
import FirstChild from './FirstChild'
import styles from './index.module.css'

const Child = () => {
    return (
        <>
            {false && <FirstChild />}
            <h3 align="center">Child组件</h3>
            <div className={styles.container}>
                <GrondChild />
                <User />
            </div>
        </>
    );
};

export default Child;