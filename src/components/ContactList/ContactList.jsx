import PropTypes from 'prop-types'
import s from "./ContactList.module.css"


export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className = {s.item}>
        <p className={s.info}>
          {name}: {number}
        </p>
        <button
        className={s.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}>
          X
        </button>
      </li>
      )
    })}
    </ul>
);
ContactList.defaultProps = {
  contacts: []
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};