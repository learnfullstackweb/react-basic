import React from 'react'

class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }
  handleChangeFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleChangeLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert('click me')
  }
  render() {
    return (
      <form>
        <label htmlFor="fname">First name: {this.state.firstName}</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.state.firstName}
          onChange={event => this.handleChangeFirstName(event)}
        />
        <br />
        <label htmlFor="lname">Last name:{this.state.lastName}</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={this.state.lastName}
          onChange={event => this.handleChangeLastName(event)}
        />
        <br />
        <br />
        <input type="submit" onClick={event => this.handleSubmit(event)} />
      </form>
    )
  }
}
export default MyComponent
