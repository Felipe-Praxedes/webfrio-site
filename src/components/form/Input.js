import React from 'react';
import styles from './Input.module.css'


const Input = ({type, text, name, placeholder, handleOnChange, value}) => {
    return ( 
        <div className={styles.form_control}>
            <input
            type={type}
            text = {text}
            name ={name}
            id = {name}
            placeholder ={placeholder}
            onChange = {handleOnChange}
            value = {value}>
            </input>
        </div>
     );
}
 
export default Input;