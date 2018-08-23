import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {


  render() {
    let lis = this.props.users.map(u => <li>{u.username}</li>)
    return (
      <div>
      <p>{this.props.users.length}</p>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}
export default connect(mapStateToProps)(Users)
