var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'user.png'}/>
        <p className={'contactLabel'}>
          Imię: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email} className={'contactEmail'}>
          {this.props.item.email}
        </a>
      </div>
    )
  },
});