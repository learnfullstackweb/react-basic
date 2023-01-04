import React from 'react'

class MyComponent extends React.Component {
  
    state = {
      name : 'Thang',
      channel: 'Hellowww'
    }
  handleOnChangeName = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  render() {

    return (
   <div>

  <div className='first'>
    <input value={this.state.name} type="text" onChange={(event)=> this.handleOnChangeName(event)} />
    My name is { this.state.name}
    </div>
          <div className='second'>
          My youtube channel : { this.state.channel}
        </div>
    </div>
  )}
}
export default MyComponent
