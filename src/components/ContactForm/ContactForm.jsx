import { Component } from "react";
import s from "./ContactForm.module.css"

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const {name,value} = event.currentTarget
    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {name} = this.state
    const nameLowerCase = name.toLowerCase()
    this.props.onSubmit({...this.state, name: nameLowerCase})
    this.reset();
  };

  reset = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    const {number,name} = this.state
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
          className={s.input}
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label} >
          Number
          <input
            className={s.input}
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}