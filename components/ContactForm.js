var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
                <input type={'text'} name={'firstName'} placeholder={'Imię'} onChange={this.props.changeHandler} value={this.props.contact.firstName}></input>
                <input type={'text'} name={'lastName'} placeholder={'Nazwisko'} onChange={this.props.changeHandler} value={this.props.contact.lastName}></input>
                <input type={'email'} className={'lastInput'} name={'email'} placeholder={'E-mail'} onChange={this.props.changeHandler} value={this.props.contact.email}></input>
                <button onClick={this.props.addUser} type={'submit'}>Dodaj kontakt</button>
      </form>
    )
  },
})