import PropTypes from 'prop-types';
import s from "./Filter.module.css"


export const Filter = ({value,changeContact}) => {
    return (
        <label className={s.label}>
             Find contacts by name
            <input 
            className={s.input}
            type = "text"
            value = {value}
            onChange = {changeContact}
            />
        </label>
    )
}

Filter.propTypes = {
    value : PropTypes.string.isRequired,
    changeContact : PropTypes.func.isRequired,
}