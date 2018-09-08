var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var App = React.createClass({
  
    getInitialState(){
        return{
            contact: {
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    },

    changeHandler(event){
        var name = event.target.getAttribute('name');
        var value = event.target.value;
        var contactForm = {};

        contactForm[name] = value;
        contactForm = Object.assign({}, this.state.contact, contactForm);

        this.setState({
            contact: contactForm
        });
    },

    addUser(event){
        event.preventDefault();
        contacts.push(Object.assign({}, this.state.contact, {id: contacts.length +1}));
        this.forceUpdate();
    },

  render: function() {
    return (
      <div className={'app'}>
        <ContactForm contact={this.state.contact} changeHandler={this.changeHandler} addUser={this.addUser}/>
        <Contacts items={contacts}/>
      </div>
    );
  }
});