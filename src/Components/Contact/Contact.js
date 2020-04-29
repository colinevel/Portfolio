import React, { Component } from 'react';
import axios from "axios";
import styles from "./Contact.module.css";

export default class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }




    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }

    render() {
        return (
            <section id="contact" className={styles.Container}>
                <div className={styles.FormContainer}>
                    <h2>Drop me a line</h2>
                    <form className={styles.ContactForm} onSubmit={ (e) => this.formSubmit(e)}>

                    <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

                    <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

                    <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

                   

                    <div className="button--container">
                    <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
                    </div>
                </form>
                </div>
            </section>
        )
    }
}
